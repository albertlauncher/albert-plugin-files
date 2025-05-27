// Copyright (c) 2022-2025 Manuel Schneider

#include "fileitems.h"
#include "fsindexnodes.h"
#include <QClipboard>
#include <QDir>
#include <QFileInfo>
#include <QGuiApplication>
#include <QMimeData>
#include <QMimeDatabase>
#include <QUrl>
#include <albert/systemutil.h>
#include <albert/plugin/applications.h>
using namespace Qt::StringLiterals;
using namespace albert::util;
using namespace albert;
using namespace std;

extern applications::Plugin *apps;

QString FileItem::id() const { return filePath(); }

QString FileItem::text() const { return name(); }

QString FileItem::subtext() const { return filePath(); }

QString FileItem::inputActionText() const
{
    const QString &path = filePath();
    QString result = (QFileInfo(path).isDir()) ? u"%1/"_s.arg(path) : path;
#ifdef Q_OS_UNIX
    if (result.startsWith(QDir::homePath()))
        result.replace(QDir::homePath(), u"~"_s);
#endif
    return result;
}

QStringList FileItem::iconUrls() const
{
    // Optimize directory icons to avoid `stat`ing all the time.
    // Also solves the "qfip does not work for dir links on macos" issue.
    static const auto directoryMimeType = QMimeDatabase().mimeTypeForName(u"inode/directory"_s);
    if (mimeType() == directoryMimeType)
    {
        static QStringList urls(u"qsp:SP_DirIcon"_s);
        return urls;
    }

    QStringList urls;
#if defined(Q_OS_UNIX) && !defined(Q_OS_MAC)
    urls << u"xdg:%1"_s.arg(mimeType().iconName());
    urls << u"xdg:%1"_s.arg(mimeType().genericIconName());
#endif
    urls << u"qfip:%1"_s.arg(filePath());
    return urls;
}

vector<Action> FileItem::actions() const
{
    vector<Action> actions;

    static const auto tr_o = QCoreApplication::translate("FileItem", "Open with default application");
    actions.emplace_back(
        u"f-open"_s, tr_o,
        [this]
        {
            openUrl(QUrl::fromLocalFile(filePath()).toString());
        });

    if (QFileInfo fi(filePath()); fi.isFile() && fi.isExecutable())
    {
        static const auto tr_e = QCoreApplication::translate("FileItem", "Execute");
        actions.emplace_back(
            u"f-exec"_s, tr_e,
            [this]()
            {
                runDetachedProcess({filePath()});
            });
    }

    static const auto tr_r = QCoreApplication::translate("FileItem", "Reveal in file browser");
    actions.emplace_back(u"f-reveal"_s, tr_r, [this] {
        openUrl(QUrl::fromLocalFile(QFileInfo(filePath()).path()).toString());
    });

    static const auto tr_t = QCoreApplication::translate("FileItem", "Open terminal here");
    actions.emplace_back(u"f-term"_s, tr_t, [this] {
        QFileInfo fi(filePath());
        apps->runTerminal(u"cd '%1'; exec $SHELL"_s.arg(fi.isDir() ? fi.filePath() : fi.path()));
    });

    static const auto tr_c = QCoreApplication::translate("FileItem", "Copy file to clipboard");
    actions.emplace_back(
        u"f-copy"_s, tr_c, [this]
        {
            //  Get clipboard
            QClipboard *cb = QGuiApplication::clipboard();

            // Ownership of the new data is transferred to the clipboard.
            auto *newMimeData = new QMimeData();

            // Copy old mimedata
            const QMimeData* oldMimeData = cb->mimeData();
            for (const QString &f : oldMimeData->formats())
                newMimeData->setData(f, oldMimeData->data(f));

            // Copy path of file
            newMimeData->setText(filePath());

            // Copy file
            newMimeData->setUrls({QUrl::fromLocalFile(filePath())});

            // Copy file (f*** you gnome)
            QByteArray gnomeFormat = QByteArray("copy\n").append(QUrl::fromLocalFile(filePath()).toEncoded());
            newMimeData->setData(u"x-special/gnome-copied-files"_s, gnomeFormat);

            // Set the mimedata
            cb->setMimeData(newMimeData);
        });

    static const auto tr_cp = QCoreApplication::translate("FileItem", "Copy path to clipboard");
    actions.emplace_back(u"f-copypath"_s, tr_cp, [this]() { setClipboardText(filePath()); });

    return actions;
}


IndexFileItem::IndexFileItem(const QString &name, const QMimeType &mime, const shared_ptr<DirNode> &parent):
        name_(name), mimetype_(mime), parent_(parent) {}

QString IndexFileItem::name() const { return name_; }

QString IndexFileItem::path() const { return parent_->filePath(); }

QString IndexFileItem::filePath() const { return u"%1/%2"_s.arg(parent_->filePath(), name_); }

const QMimeType &IndexFileItem::mimeType() const { return mimetype_; }

StandardFile::StandardFile(QString path, QMimeType mimetype, QString completion) :
    completion_(::move(completion)),
    mimetype_(::move(mimetype))
{
    QFileInfo fileInfo(path);
    name_ = fileInfo.fileName();
    path_ = fileInfo.canonicalPath();
}

QString StandardFile::name() const { return name_; }

QString StandardFile::path() const { return path_; }

QString StandardFile::filePath() const { return QDir(path_).filePath(name_); }

const QMimeType &StandardFile::mimeType() const { return mimetype_; }

QString StandardFile::inputActionText() const
{ return completion_.isEmpty() ? FileItem::inputActionText() : completion_; }
