// Copyright (c) 2022-2025 Manuel Schneider

#include "fileitems.h"
#include "fsindexnodes.h"
#include "fsindexpath.h"
#include <QFileInfo>
#include <QJsonObject>
#include <albert/logging.h>
using namespace std;

FsIndexPath::FsIndexPath(const QString &path) : root_(RootNode::make(path))
{
    connect(&fs_watcher_, &QFileSystemWatcher::directoryChanged,
            this, [this](){ emit updateRequired(this); });
    connect(&scan_interval_timer_, &QTimer::timeout,
            this, [this](){ emit updateRequired(this); });

    // Be tolerant but warn
    if (QFileInfo fi(root_->filePath()); !fi.exists())
        WARN << "Root path does not exist:" << fi.absolutePath();
    else if (!fi.isDir())
        WARN << "Root path is not a directory:" << fi.absolutePath();

    self = make_shared<StandardFile>(root_->filePath(), DirNode::dirMimeType());
}

FsIndexPath::~FsIndexPath() = default;

QJsonObject FsIndexPath::serialize() const
{ return root_->toJson(); }

void FsIndexPath::deserialize(const QJsonObject &json_object)
{ root_ = RootNode::fromJson(json_object); }

QString FsIndexPath::path() const { return root_->filePath(); }

void FsIndexPath::update(const bool &abort, function<void(const QString &)> status)
{
    IndexSettings s;

    s.root_path = this->path();

    for (const auto &pattern : as_const(name_filters))
        s.name_filters.emplace_back(pattern);
    for (const auto &pattern : as_const(mime_filters))
        s.mime_filters.emplace_back(QRegularExpression::fromWildcard(pattern,
                                                                     Qt::CaseSensitive,
                                                                     QRegularExpression::UnanchoredWildcardConversion));
    s.index_hidden_files = index_hidden_files;
    s.follow_symlinks = follow_symlinks;
    s.max_depth = max_depth;
    s.forced = force_update;
    set<QString> indexed_dirs;

    root_->update(root_, abort, status, s, indexed_dirs, 1);

    status(tr("Indexed %n directories in %1.", nullptr, indexed_dirs.size()).arg(path()));

    if (s.forced && !abort) // In case of successful forced run clear force flag
        force_update = false;
}

void FsIndexPath::items(vector<shared_ptr<FileItem>> &items) const
{
    items.emplace_back(self);
    root_->items(items);
}

const QStringList &FsIndexPath::nameFilters() const { return name_filters; }

const QStringList &FsIndexPath::mimeFilters() const { return mime_filters; }

bool FsIndexPath::indexHidden() const { return index_hidden_files; }

bool FsIndexPath::followSymlinks() const { return follow_symlinks; }

uint8_t FsIndexPath::maxDepth() const { return max_depth; }

bool FsIndexPath::watchFileSystem() const { return watch_fs; }

uint FsIndexPath::scanInterval() const { return (uint)(scan_interval_timer_.interval()/60000); }

void FsIndexPath::setNameFilters(const QStringList &val)
{
    name_filters = val;
    force_update = true;
    emit updateRequired(this);
}

void FsIndexPath::setMimeFilters(const QStringList &val)
{
    mime_filters = val;
    force_update = true;
    emit updateRequired(this);
}

void FsIndexPath::setIndexHidden(bool val)
{
    index_hidden_files = val;
    force_update = true;
    emit updateRequired(this);
}

void FsIndexPath::setFollowSymlinks(bool val)
{
    follow_symlinks = val;
    force_update = true;
    emit updateRequired(this);
}

void FsIndexPath::setMaxDepth(uint8_t val)
{
    max_depth = val;
    force_update = true;
    emit updateRequired(this);
}

void FsIndexPath::setWatchFilesystem(bool val)
{
    watch_fs = val;
    if (val){
        vector<shared_ptr<DirNode>> nodes;
        root_->nodes(nodes);
        QStringList l;
        for (auto &node : nodes)
            l << node->filePath();
        l << root_->filePath();
        fs_watcher_.addPaths(l);
    } else {
        if (!fs_watcher_.directories().empty())
            fs_watcher_.removePaths(fs_watcher_.directories());
    }
}

void FsIndexPath::setScanInterval(uint minutes)
{
    if (minutes)
        scan_interval_timer_.start((int)(minutes*60000));
    else
        scan_interval_timer_.stop();
}

