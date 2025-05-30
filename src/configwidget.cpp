// Copyright (c) 2022-2025 Manuel Schneider

#include "configwidget.h"
#include "mimefilterdialog.h"
#include "namefilterdialog.h"
#include "plugin.h"
#include <QDir>
#include <QFileDialog>
#include <QMessageBox>
#include <QStandardPaths>
#include <albert/widgetsutil.h>
#include <map>
using namespace Qt::StringLiterals;
using namespace albert::util;
using namespace albert;
using namespace std;

static const auto mt_indode_directory = u"inode/directory"_s;

static QStringList getPaths(const map<QString,unique_ptr<FsIndexPath>> &index_paths){
    QStringList paths;
    for (const auto &[p,_] : index_paths)
        paths << p;
    return paths;
};

ConfigWidget::ConfigWidget(Plugin *plu, QWidget *par) : QWidget(par), plugin(plu)
{
    ui.setupUi(this);

    bind(ui.matchCaseSensitiveCheckBox,
         plugin,
         &Plugin::fs_browsers_match_case_sensitive,
         &Plugin::set_fs_browsers_match_case_sensitive,
         &Plugin::fs_browsers_match_case_sensitive_changed);

    bind(ui.showHiddenFilesCheckBox,
         plugin,
         &Plugin::fs_browsers_show_hidden,
         &Plugin::set_fs_browsers_show_hidden,
         &Plugin::fs_browsers_show_hidden_changed);

    bind(ui.sortCaseInsensitveCheckBox,
         plugin,
         &Plugin::fs_browsers_sort_case_insensitive,
         &Plugin::set_fs_browsers_sort_case_insensitive,
         &Plugin::fs_browsers_sort_case_insensitive_changed);

    bind(ui.showDirsFirstCheckBox,
         plugin,
         &Plugin::fs_browsers_show_dirs_first,
         &Plugin::set_fs_browsers_show_dirs_first,
         &Plugin::fs_browsers_show_dirs_first_changed);

    bind(ui.indexFilePathCheckBox,
         plugin,
         &Plugin::index_file_path,
         &Plugin::set_index_file_path,
         &Plugin::index_file_path_changed);

    auto &index_paths = plu->fsIndex().indexPaths();
    paths_model.setStringList(getPaths(index_paths));
    ui.listView_paths->setModel(&paths_model);

    connect(ui.toolButton_add, &QPushButton::clicked, this, [this]
    {
        QString path = QFileDialog::getExistingDirectory(
                this,
                tr("Choose directory"),
                QStandardPaths::writableLocation(QStandardPaths::HomeLocation));
        if (!path.isEmpty()){
            plugin->addPath(path);

            auto paths = getPaths(plugin->fsIndex().indexPaths());
            paths_model.setStringList(paths);
            for (int i = 0; i < paths.size(); ++i)
                if (paths[i] == path)
                    ui.listView_paths->setCurrentIndex(paths_model.index(i, 0));
        }
        ui.listView_paths->setFixedHeight(
                ui.listView_paths->contentsMargins().bottom() +
                ui.listView_paths->contentsMargins().top() +
                paths_model.rowCount()*ui.listView_paths->sizeHintForRow(0));
    });

    connect(ui.toolButton_rem, &QPushButton::clicked, this, [this]()
    {
        if (ui.listView_paths->currentIndex().isValid()){
            plugin->removePath(ui.listView_paths->currentIndex().data().toString());
            paths_model.removeRow(ui.listView_paths->currentIndex().row());
        }
        ui.listView_paths->setFixedHeight(
            ui.listView_paths->contentsMargins().bottom() +
            ui.listView_paths->contentsMargins().top() +
            paths_model.rowCount()*ui.listView_paths->sizeHintForRow(0));
    });

    connect(plugin, &Plugin::statusInfo, this, [this](const QString& text){
        QFontMetrics metrics(ui.label_statusbar->font());
        QString elidedText = metrics.elidedText(text, Qt::ElideRight, ui.label_statusbar->width()-5);
        ui.label_statusbar->setText(elidedText);
    });

    /*
     * Per path stuff
     */

    // Update ui on index change
    connect(ui.listView_paths->selectionModel(), &QItemSelectionModel::currentChanged,
            this, [this](const QModelIndex &current, const QModelIndex&){
                if (!current.isValid()) {
                    ui.groupBox_path->setEnabled(false);
                } else {
                    ui.groupBox_path->setEnabled(true);
                    current_path = current.data().toString();
                    auto &fsp = plugin->fsIndex().indexPaths().at(current_path);
                    ui.checkBox_hidden->setChecked(fsp->indexHidden());
                    ui.checkBox_followSymlinks->setChecked(fsp->followSymlinks());
                    ui.spinBox_depth->setValue(static_cast<int>(fsp->maxDepth()));
                    ui.spinBox_interval->setValue(static_cast<int>(fsp->scanInterval()));
                    ui.checkBox_fswatch->setChecked(fsp->watchFileSystem());
                    adjustMimeCheckboxes();
                }
            });

    connect(ui.pushButton_namefilters, &QPushButton::clicked, this, [this]() {
        auto &fsp = plugin->fsIndex().indexPaths().at(current_path);
        NameFilterDialog dialog(fsp->nameFilters(), this);
        dialog.setWindowModality(Qt::WindowModal);
        if (dialog.exec()) {
            auto filters = dialog.filters();
            filters.removeDuplicates();
            fsp->setNameFilters(filters);
        }
    });

    connect(ui.pushButton_mimefilters, &QPushButton::clicked, this, [this]() {
        auto &fsp = plugin->fsIndex().indexPaths().at(current_path);
        MimeFilterDialog dialog(fsp->mimeFilters(), this);
        dialog.setWindowModality(Qt::WindowModal);
        if (dialog.exec()) {
            auto filters = dialog.filters();
            filters.removeDuplicates();
            fsp->setMimeFilters(filters);
            adjustMimeCheckboxes();

        }
    });

    connect(ui.checkBox_hidden, &QCheckBox::clicked, this,
            [this](bool value){ plugin->fsIndex().indexPaths().at(current_path)->setIndexHidden(value); });

    connect(ui.checkBox_followSymlinks, &QCheckBox::clicked, this,
            [this](bool value){ plugin->fsIndex().indexPaths().at(current_path)->setFollowSymlinks(value); });

    connect(ui.spinBox_interval, &QSpinBox::editingFinished, this,
            [this](){ plugin->fsIndex().indexPaths().at(current_path)->setScanInterval(ui.spinBox_interval->value()); });

    connect(ui.spinBox_depth, &QSpinBox::editingFinished, this,
            [this](){ plugin->fsIndex().indexPaths().at(current_path)->setMaxDepth(ui.spinBox_depth->value()); });

    connect(ui.checkBox_fswatch, &QCheckBox::clicked, this,
            [this](bool value){
                if (value)
                    QMessageBox::warning(
                        this, u"Warning"_s,
                        tr("Enabling file system watches comes with caveats. You should only "
                           "activate this option if you know what you are doing. A lot of file "
                           "system changes (compilation, installing, etc) while having watches "
                           "enabled can put your system under high load."));

                plugin->fsIndex().indexPaths().at(current_path)->setWatchFilesystem(value);
            });

    auto helper = [this](QCheckBox *checkbox, const QString& type){
        connect(checkbox, &QCheckBox::clicked, this, [this, checkbox, type](bool checked){
            checkbox->setTristate(false);
            auto patterns = plugin->fsIndex().indexPaths().at(current_path)->mimeFilters();
            patterns = patterns.filter(QRegularExpression(uR"(^(?!%1\/))"_s
                                                              .arg(type))); // drop all of mimetype class
            if (checked)
                patterns.push_back(u"%1/*"_s.arg(type));
            plugin->fsIndex().indexPaths().at(current_path)->setMimeFilters(patterns);
        });
    };
    helper(ui.checkBox_audio, u"audio"_s);
    helper(ui.checkBox_video, u"video"_s);
    helper(ui.checkBox_image, u"image"_s);
    helper(ui.checkBox_docs, u"application"_s);

    connect(ui.checkBox_dirs, &QCheckBox::clicked, this, [this](bool checked){
        auto patterns = plugin->fsIndex().indexPaths().at(current_path)->mimeFilters();
        patterns.removeAll(mt_indode_directory);
        if (checked)
            patterns.push_back(mt_indode_directory);
        plugin->fsIndex().indexPaths().at(current_path)->setMimeFilters(patterns);
    });

    ui.listView_paths->setFixedHeight(
            ui.listView_paths->contentsMargins().bottom() +
            ui.listView_paths->contentsMargins().top() +
            paths_model.rowCount()*ui.listView_paths->sizeHintForRow(0));
}

void ConfigWidget::adjustMimeCheckboxes()
{
    auto patterns = plugin->fsIndex().indexPaths().at(current_path)->mimeFilters();
    ui.checkBox_dirs->setCheckState(patterns.contains(mt_indode_directory) ? Qt::Checked : Qt::Unchecked);

    initializer_list<pair<QCheckBox*,QString>> m {
            {ui.checkBox_audio, u"audio/"_s},
            {ui.checkBox_video, u"video/"_s},
            {ui.checkBox_image, u"image/"_s},
            {ui.checkBox_docs, u"application/"_s}
    };

    for (const auto &[checkbox, mime_prefix] : m)
    {
        if (patterns.contains(mime_prefix + u'*'))
            checkbox->setCheckState(Qt::Checked);
        else if (any_of(patterns.begin(), patterns.end(),
                        [mp=mime_prefix](const QString & str){ return str.startsWith(mp); }))
            checkbox->setCheckState(Qt::PartiallyChecked);
        else
            checkbox->setCheckState(Qt::Unchecked);
    }
}

