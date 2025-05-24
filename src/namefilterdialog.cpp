// Copyright (c) 2022-2025 Manuel Schneider

#include "namefilterdialog.h"
#include <QRegularExpression>
#include <QPushButton>

NameFilterDialog::NameFilterDialog(const QStringList &filters, QWidget *parent): QDialog(parent)
{
    ui.setupUi(this);
    ui.plainTextEdit->setPlainText(filters.join(u'\n'));
    connect(ui.plainTextEdit, &QPlainTextEdit::textChanged, this, [this](){
        auto patterns = ui.plainTextEdit->toPlainText().split(u'\n');
        QStringList errors;
        for (auto &pattern : patterns)
            if (QRegularExpression re(pattern); !re.isValid())
                errors << QStringLiteral("'%1' %2").arg(pattern, re.errorString());

        ui.buttonBox->button(QDialogButtonBox::Ok)->setEnabled(errors.isEmpty());

        ui.label_error->setText(errors.join(QStringLiteral(", ")));
    });
}

QStringList NameFilterDialog::filters() const
{
    return ui.plainTextEdit->toPlainText().split(u'\n', Qt::SkipEmptyParts);
}
