// Copyright (c) 2022-2025 Manuel Schneider

#pragma once
#include "filebrowsers.h"
#include "fsindex.h"
#include <QObject>
#include <QSettings>
#include <albert/extensionplugin.h>
#include <albert/indexqueryhandler.h>
#include <albert/plugin/applications.h>
#include <albert/plugindependency.h>

class Plugin : public albert::ExtensionPlugin,
               public albert::IndexQueryHandler
{
    ALBERT_PLUGIN

public:

    Plugin();
    ~Plugin();

    std::vector<albert::Extension*> extensions() override;
    QWidget *buildConfigWidget() override;
    void updateIndexItems() override;

    const FsIndex &fsIndex();
    void addPath(const QString&);
    void removePath(const QString&);

    bool indexFilePath() const;
    void setIndexFilePath(bool);

    bool fsBrowsersMatchCaseSensitive() const;
    void setFsBrowsersMatchCaseSensitive(bool);

    bool fsBrowsersShowHidden() const;
    void setFsBrowsersShowHidden(bool);

    bool fsBrowsersSortCaseInsensitive() const;
    void setFsBrowsersSortCaseInsensitive(bool);

    bool fsBrowsersShowDirsFirst() const;
    void setFsBrowsersShowDirsFirst(bool);

private:

    albert::StrongDependency<applications::Plugin> apps{QStringLiteral("applications")};
    FsIndex fs_index_;
    std::shared_ptr<albert::Item> update_item;
    HomeBrowser homebrowser;
    RootBrowser rootbrowser;

    bool index_file_path_;
    bool fs_browsers_match_case_sensitive_;
    bool fs_browsers_show_hidden_;
    bool fs_browsers_sort_case_insensitive_;
    bool fs_browsers_show_dirs_first_;

signals:

    void statusInfo(const QString&);

};
