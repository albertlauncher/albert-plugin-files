// Copyright (c) 2022-2025 Manuel Schneider

#include "fileitems.h"
#include "fsindexnodes.h"
#include <QDir>
#include <QJsonArray>
#include <QJsonObject>
#include <QMimeDatabase>
#include <QRegularExpression>
#include <QString>
#include <memory>
#include <set>
#include <utility>
#include <vector>
using namespace std;
using namespace Qt::StringLiterals;

static const auto JK_MIME     = u"mimetype"_s;
static const auto JK_NAME     = u"name"_s;
static const auto JK_PATH     = u"path"_s;
static const auto JK_MDATE    = u"mdate"_s;
static const auto JK_CHILDREN = u"children"_s;
static const auto JK_ITEMS    = u"items"_s;

// https://code.qt.io/cgit/qt/qtbase.git/tree/src/corelib/mimetypes/qmimedatabase.cpp?h=dev
static QMimeDatabase mdb;
static QMimeType dirmimetype = mdb.mimeTypeForName(u"inode/directory"_s);


NameFilter::NameFilter(QRegularExpression re, PatternType t) : regex(::move(re)), type(t) {}

NameFilter::NameFilter(const QString &pattern) : regex(pattern), type(PatternType::Exclude) {
    if (pattern.startsWith(u'!')){
        regex = QRegularExpression(pattern.mid(1));
        type = PatternType::Include;
    }
}


DirNode::DirNode(QString name, const shared_ptr<DirNode>& parent, uint64_t mdate):
        parent_(parent), name_(::move(name)), mdate_(mdate) { name_.shrink_to_fit(); }

DirNode::~DirNode() = default;

shared_ptr<DirNode> DirNode::make(QString name, const shared_ptr<DirNode>& parent, uint64_t mdate)
{
    return shared_ptr<DirNode>(new DirNode(::move(name), parent, mdate));
}

shared_ptr<DirNode> DirNode::fromJson(const QJsonObject &json, const shared_ptr<DirNode>& parent)
{
    // need a factory since shared_from_this is not available in ctor
    shared_ptr<DirNode> d(new DirNode(json[JK_NAME].toString(), parent, json[JK_MDATE].toVariant().toULongLong()));

    for (const auto &json_value : json[JK_CHILDREN].toArray())
        d->children_.emplace_back(fromJson(json_value.toObject(), d));

    for (const auto &json_value : json[JK_ITEMS].toArray()){
        auto json_item = json_value.toObject();
        d->items_.emplace_back(make_shared<IndexFileItem>(json_item[JK_NAME].toString(),
                                                          mdb.mimeTypeForName(json_item[JK_MIME].toString()), d));
    }

    d->children_.shrink_to_fit();
    d->items_.shrink_to_fit();
    return d;
}

QJsonObject DirNode::toJson() const
{
    QJsonObject json;
    json.insert(JK_NAME, name_);
    json.insert(JK_MDATE, (qint64)mdate_);

    QJsonArray json_children;
    for (const auto &child : children_)
        json_children.push_back(child->toJson());
    json.insert(JK_CHILDREN, json_children);

    QJsonArray json_items;
    for (const auto &item : items_){
        QJsonObject json_item;
        json_item.insert(JK_NAME, item->name());
        json_item.insert(JK_MIME, item->mimeType().name());
        json_items.push_back(json_item);
    }
    json.insert(JK_ITEMS, json_items);

    return json;
}

void DirNode::removeChildren()
{
    for (auto &child : children_)
        child->removeChildren();
    children_.clear();
}

void DirNode::update(const shared_ptr<DirNode>& shared_this,
                     const bool &abort,
                     function<void(const QString&)> &status,
                     const IndexSettings &settings,
                     set<QString> &indexed_dirs,
                     uint depth)
{
    if (abort)
        return;

    const QFileInfo fileInfo(filePath());

    // Skip if this dir has already been indexed (loop detection)
    if (const auto &[it, success] = indexed_dirs.emplace(fileInfo.canonicalFilePath()); !success)
        return;

    auto mdate = (uint64_t)fileInfo.lastModified().toSecsSinceEpoch();

    if (settings.forced || mdate_ < mdate) {
        mdate_ = mdate;

        QString absFilePath = fileInfo.absoluteFilePath();
        status(u"Indexing %1"_s.arg(fileInfo.filePath()));

        auto filters = QDir::Files | QDir::Dirs | QDir::NoDotAndDotDot;
        if (settings.index_hidden_files)
            filters |= QDir::Hidden;

        auto cit = children_.begin();
        auto iit = items_.begin();
        for (const auto &fi : QDir(absFilePath).entryInfoList(filters, QDir::Name))
        {
            // Erase children and items which do not exists anymore (until this lexicographic point)
            while (cit != children_.end() && (*cit)->name_ < fi.fileName())
                cit = children_.erase(cit);
            while (iit != items_.end() && (*iit)->name() < fi.fileName())
                iit = items_.erase(iit);

            // Match against name filters
            auto exclude = false;
            auto relative_path = fi.filePath().mid(settings.root_path.length()+1);
            for (const auto &filter: settings.name_filters)
                if (((exclude && filter.type == PatternType::Include) || (!exclude && filter.type == PatternType::Exclude))
                    && filter.regex.match(relative_path).hasMatch())
                    exclude = !exclude;

            // Index structure
            if (fi.isDir()) {
                auto is_indexed = cit != children_.end() && (*cit)->name_ == fi.fileName();
                if (exclude || settings.max_depth < depth || (fi.isSymLink() && !settings.follow_symlinks)){
                    if (is_indexed) {
                        (*cit)->removeChildren();
                        cit = children_.erase(cit);
                    }
                } else {
                    if (!is_indexed)
                        cit = children_.emplace(cit, DirNode::make(fi.fileName(), shared_this));
                    (*cit)->update(*cit, abort, status, settings, indexed_dirs, depth+1);  // UPDATE new directories always
                    ++cit;
                }
            }

            // Items
            auto mime_type = mdb.mimeTypeForFile(fi);
            exclude = none_of(settings.mime_filters.begin(), settings.mime_filters.end(),
                               [mt = mime_type.name()](const QRegularExpression &re) {
                                   return re.match(mt).hasMatch();
                               }) || exclude || settings.max_depth < depth;
            if (iit != items_.end() && (*iit)->name() == fi.fileName()) {  // _is_ already indexed
                if (exclude)
                    iit = items_.erase(iit);
                else ++iit;
            } else {  // is _not_ indexed yet
                if (!(exclude)) {
                    iit = items_.emplace(iit, make_shared<IndexFileItem>(fi.fileName(), mime_type, shared_this));
                    ++iit;
                }
            }
        }

        // Remaining entries have no corresponding physical file. delete.
        while (cit != children_.end())
            cit = children_.erase(cit);
        while (iit != items_.end())
            iit = items_.erase(iit);

        children_.shrink_to_fit();
        items_.shrink_to_fit();

    } else {
        // Not dirty or forced
        // Check children anyway because mdates dont propagate upwards
        for (auto &child : children_)
            child->update(child, abort, status, settings, indexed_dirs, depth+1);
    }
}

QString DirNode::path() const { return parent_->filePath(); }

QString DirNode::filePath() const { return parent_->filePath().append(u'/').append(name_); }

QString DirNode::relativeFilePath() const { return parent_->relativeFilePath().append(u'/').append(name_); }

void DirNode::items(vector<shared_ptr<FileItem>> &result) const
{
    for (const auto &item : items_)
        result.emplace_back(item);
    for (const auto &child : children_)
        child->items(result);
}

void DirNode::nodes(vector<shared_ptr<DirNode>> &result) const
{
    for (const auto &child : children_){
        result.emplace_back(child);
        child->nodes(result);
    }
}

QMimeType DirNode::dirMimeType() {return dirmimetype; }


RootNode::RootNode(QString filePath): DirNode(QFileInfo(filePath).fileName())
{
    // Qt appends a slash if the dir is root.
    // Workaround path building problems by undoing this
    auto location = QFileInfo(filePath).dir();
    if (!location.isRoot())  // Leave root path_ empty
        path_ = QFileInfo(filePath).path();
    path_.shrink_to_fit();
}

RootNode::~RootNode() { removeChildren(); }

shared_ptr<RootNode> RootNode::make(QString name)
{
    return shared_ptr<RootNode>(new RootNode(name));
}

shared_ptr<RootNode> RootNode::fromJson(const QJsonObject &json)
{
    auto n = make(json[JK_NAME].toString());
    n->path_ = json[JK_PATH].toString();
    n->mdate_ = json[JK_MDATE].toVariant().toULongLong();

    for (const auto &json_value : json[JK_CHILDREN].toArray())
        n->children_.emplace_back(DirNode::fromJson(json_value.toObject(), n));

    for (const auto &json_value : json[JK_ITEMS].toArray()){
        auto json_item = json_value.toObject();
        n->items_.emplace_back(make_shared<IndexFileItem>(json_item[JK_NAME].toString(),
                                                          mdb.mimeTypeForName(json_item[JK_MIME].toString()), n));
    }

    n->path_.shrink_to_fit();
    n->children_.shrink_to_fit();
    n->items_.shrink_to_fit();
    return n;
}

QJsonObject RootNode::toJson() const
{
    QJsonObject json = DirNode::toJson();
    json.insert(JK_PATH, path_);
    return json;
}

QString RootNode::path() const { return path_; }

QString RootNode::filePath() const { return QDir(path_).filePath(name_); }

QString RootNode::relativeFilePath() const { return {}; }
