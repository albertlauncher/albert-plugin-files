// Copyright (c) 2022-2026 Manuel Schneider

#pragma once
#include <albert/item.h>
class DirNode;


class FileItem : public albert::Item
{
public:
    virtual QString name() const = 0;
    virtual QString path() const = 0;
    virtual QString filePath() const = 0;
    QString id() const override;
    QString text() const override;
    QString subtext() const override;
    std::unique_ptr<albert::Icon> icon() const override;
    QString inputActionText() const override;
    std::vector<albert::Action> actions() const override;
};


class IndexFileItem : public FileItem
{
public:
    explicit IndexFileItem(const QString &name, const std::shared_ptr<DirNode> &parent);
    QString name() const override;
    QString path() const override;
    QString filePath() const override;
private:
    const QString name_;
    const std::shared_ptr<DirNode> parent_;
};


class StandardFile : public FileItem
{
public:
    StandardFile(QString filePath, QString completion = {});
    QString name() const override;
    QString path() const override;
    QString filePath() const override;
    QString inputActionText() const override;
protected:
    QString name_;
    QString path_;
    QString completion_;

};
