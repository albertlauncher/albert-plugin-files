// Copyright (c) 2022-2025 Manuel Schneider

#include "configwidget.h"
#include "fileitems.h"
#include "plugin.h"
#include <QDir>
#include <QJsonDocument>
#include <QJsonObject>
#include <QSettings>
#include <albert/extensionregistry.h>
#include <albert/logging.h>
#include <albert/standarditem.h>
#include <albert/systemutil.h>
ALBERT_LOGGING_CATEGORY("files")
using namespace Qt::StringLiterals;
using namespace albert::util;
using namespace albert;
using namespace std;

namespace
{
static const auto CFG_PATHS               = u"paths"_s;
static const auto CFG_MIME_FILTERS        = u"mimeFilters"_s;
static const QStringList DEF_MIME_FILTERS = { u"inode/directory"_s };
static const auto CFG_NAME_FILTERS        = u"nameFilters"_s;
static const QStringList DEF_NAME_FILTERS
#if defined Q_OS_MACOS
    = { u"\\.DS_Store"_s };
#else
    = {};
#endif
static const auto CFG_INDEX_HIDDEN    = u"indexhidden"_s;
static const auto DEF_INDEX_HIDDEN    = false;
static const auto CFG_FOLLOW_SYMLINKS = u"followSymlinks"_s;
static const auto DEF_FOLLOW_SYMLINKS = false;
static const auto CFG_FS_WATCHES      = u"useFileSystemWatches"_s;
static const auto DEF_FS_WATCHES      = false;
static const auto CFG_MAX_DEPTH       = u"maxDepth"_s;
static const auto DEF_MAX_DEPTH       = 255u;
static const auto CFG_SCAN_INTERVAL   = u"scanInterval"_s;
static const auto DEF_SCAN_INTERVAL   = 5;
static const auto INDEX_FILE_NAME     = "file_index.json";
}

applications::Plugin *apps;

Plugin::Plugin():
    homebrowser(fs_browsers_match_case_sensitive_,
                fs_browsers_show_hidden_,
                fs_browsers_sort_case_insensitive_,
                fs_browsers_show_dirs_first_),
    rootbrowser(fs_browsers_match_case_sensitive_,
                fs_browsers_show_hidden_,
                fs_browsers_sort_case_insensitive_,
                fs_browsers_show_dirs_first_)
{
    ::apps = apps.get();

    connect(&fs_index_, &FsIndex::status, this, &Plugin::statusInfo);
    connect(&fs_index_, &FsIndex::updatedFinished, this, &Plugin::updateIndexItems);
    connect(this, &Plugin::index_file_path_changed, this, &Plugin::updateIndexItems);

    auto cache_path = cacheLocation();
    tryCreateDirectory(cache_path);

    QJsonObject object;
    if (QFile file(cache_path / INDEX_FILE_NAME);
        file.open(QIODevice::ReadOnly))
        object = QJsonDocument(QJsonDocument::fromJson(file.readAll())).object();

    auto s = settings();
    restore_index_file_path(s);
    restore_fs_browsers_match_case_sensitive(s);
    restore_fs_browsers_show_hidden(s);
    restore_fs_browsers_sort_case_insensitive(s);
    restore_fs_browsers_show_dirs_first(s);

    const auto paths = s->value(CFG_PATHS, QStringList()).toStringList();

    for (const auto &path : paths){
        auto fsp = make_unique<FsIndexPath>(path);

        if (auto it = object.find(path); it != object.end())
            fsp->deserialize(it.value().toObject());

        s->beginGroup(path);
        fsp->setFollowSymlinks(s->value(CFG_FOLLOW_SYMLINKS, DEF_FOLLOW_SYMLINKS).toBool());
        fsp->setIndexHidden(s->value(CFG_INDEX_HIDDEN, DEF_INDEX_HIDDEN).toBool());
        fsp->setNameFilters(s->value(CFG_NAME_FILTERS, DEF_NAME_FILTERS).toStringList());
        fsp->setMimeFilters(s->value(CFG_MIME_FILTERS, DEF_MIME_FILTERS).toStringList());
        fsp->setMaxDepth(s->value(CFG_MAX_DEPTH, DEF_MAX_DEPTH).toUInt());
        fsp->setScanInterval(s->value(CFG_SCAN_INTERVAL, DEF_SCAN_INTERVAL).toUInt());
        fsp->setWatchFilesystem(s->value(CFG_FS_WATCHES, DEF_FS_WATCHES).toBool());
        s->endGroup();

        fs_index_.addPath(::move(fsp));
    }

    update_item = StandardItem::make(
        u"scan_files"_s,
        tr("Update index"),
        tr("Update the file index"),
        {u":app_icon"_s},
        {{u"scan_files"_s, tr("Scan"), [this]{ fs_index_.update(); }}}
    );
}

Plugin::~Plugin()
{
    fs_index_.disconnect();

    auto s = settings();
    QStringList paths;
    QJsonObject object;
    for (auto &[path, fsp] : fs_index_.indexPaths()){
        paths << path;
        s->beginGroup(path);
        s->setValue(CFG_NAME_FILTERS, fsp->nameFilters());
        s->setValue(CFG_MIME_FILTERS, fsp->mimeFilters());
        s->setValue(CFG_INDEX_HIDDEN, fsp->indexHidden());
        s->setValue(CFG_FOLLOW_SYMLINKS, fsp->followSymlinks());
        s->setValue(CFG_MAX_DEPTH, fsp->maxDepth());
        s->setValue(CFG_FS_WATCHES, fsp->watchFileSystem());
        s->setValue(CFG_SCAN_INTERVAL, fsp->scanInterval());
        s->endGroup();
        object.insert(path, fsp->serialize());
    }
    s->setValue(CFG_PATHS, paths);

    if (QFile file(cacheLocation() / INDEX_FILE_NAME);
        file.open(QIODevice::WriteOnly))
    {
        DEBG << "Storing file index to" << file.fileName();
        file.write(QJsonDocument(object).toJson(QJsonDocument::Compact));
        file.close();
    } else
        WARN << "Couldn't write to file:" << file.fileName();
}

vector<Extension*> Plugin::extensions() { return { this, &homebrowser, &rootbrowser }; }

void Plugin::updateIndexItems()
{
    vector<IndexItem> ii;

    // Get file items
    for (auto &[path, fsp] : fs_index_.indexPaths())
    {
        vector<shared_ptr<FileItem>> items;
        fsp->items(items);

        // Create index items
        for (auto &file_item : items)
        {
            ii.emplace_back(file_item, file_item->name());
            if (index_file_path())
                ii.emplace_back(file_item, file_item->filePath());
        }
    }

    // Add update item
    ii.emplace_back(update_item, update_item->text());

    vector<Action> a;

#if defined(Q_OS_MAC)
    a.emplace_back(u"open"_s, tr("Open trash"),
                   [=]{ openUrl(u"file://%1/.Trash"_s.arg(QDir::homePath())); });
    a.emplace_back(u"empty"_s, tr("Empty trash"),
                   [=]{ runDetachedProcess({u"osascript"_s, u"-e"_s, u"tell application \"Finder\" to empty trash"_s}); });
#elif defined(Q_OS_UNIX)
    a.emplace_back(u"open"_s, tr("Open trash"), [=]{ openUrl(u"trash:///"_s); });
#endif

    auto item = StandardItem::make(
        u"trash"_s,
        tr("Trash"),
        tr("Your trash folder"),
        {u"xdg:user-trash-full"_s, u"qsp:SP_TrashIcon"_s},
        ::move(a)
    );
    ii.emplace_back(item, item->text());

    setIndexItems(::move(ii));
}

QWidget *Plugin::buildConfigWidget() { return new ConfigWidget(this); }

const FsIndex &Plugin::fsIndex() { return fs_index_; }

void Plugin::addPath(const QString &path)
{
    auto fsp = make_unique<FsIndexPath>(path);
    fsp->setFollowSymlinks(DEF_FOLLOW_SYMLINKS);
    fsp->setIndexHidden(DEF_INDEX_HIDDEN);
    fsp->setNameFilters(DEF_NAME_FILTERS);
    fsp->setMimeFilters(DEF_MIME_FILTERS);
    fsp->setMaxDepth(DEF_MAX_DEPTH);
    fsp->setScanInterval(DEF_SCAN_INTERVAL);
    fsp->setWatchFilesystem(DEF_FS_WATCHES);
    fs_index_.addPath(::move(fsp));
}

void Plugin::removePath(const QString &path)
{
    fs_index_.removePath(path);
    updateIndexItems();
}
