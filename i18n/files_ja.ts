<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ja_JP">
<context>
    <name>ConfigWidget</name>
    <message>
        <source>The files plugin provides three extensions to access files. The main extension indexes the file system as specified in the settings and provides a lookup by filename. The other two file browsing extensions are triggered by `/` and `~` and provide a way to browse through the file system using paths. This is handy to access files that are _not_ indexed. In combination with the tab completion this is a nice way to browse the file system.</source>
        <translation>ファイルプラグインは、ファイルにアクセスするための3つの拡張機能を提供します。メインの拡張機能は設定で指定されたようにファイルシステムをインデックスし、ファイル名による検索を提供します。他の2つのファイルブラウザ拡張機能は `/` と `~` でトリガーされ、パスを使用してファイルシステムを閲覧する方法を提供します。これはインデックス _されていない_ ファイルにアクセスするのに便利です。タブ補完と組み合わせると、ファイルシステムを閲覧する良い方法です。</translation>
    </message>
    <message>
        <source>Path settings</source>
        <translation>パス設定</translation>
    </message>
    <message>
        <source>Indexing</source>
        <translation>インデックス</translation>
    </message>
    <message>
        <source>Index hidden files</source>
        <translation>隠しファイルをインデックス</translation>
    </message>
    <message>
        <source>Follow links</source>
        <translation>リンクを追跡</translation>
    </message>
    <message>
        <source>This option should by used with care and only if necessary. It may cause indexing of way more files you wanted when the indexed file tree contains links to directories outside the specified file tree.</source>
        <translation>このオプションは注意して使用し、必要な場合のみ使用すべきです。インデックスされたファイルツリーに指定されたファイルツリーの外へのディレクトリへのリンクが含まれている場合、意図よりも多くのファイルがインデックスされる可能性があります。</translation>
    </message>
    <message>
        <source>Max depth</source>
        <translation>最大深度</translation>
    </message>
    <message>
        <source>Scan interval</source>
        <translation>スキャン間隔</translation>
    </message>
    <message>
        <source> min</source>
        <extracomment>Abbr. minutes</extracomment>
        <translation> 分</translation>
    </message>
    <message>
        <source>Watch filesystem</source>
        <translation>ファイルシステムを監視</translation>
    </message>
    <message>
        <source>Ignore patterns</source>
        <translation>除外パターン</translation>
    </message>
    <message>
        <source>MIME types</source>
        <translation>MIMEタイプ</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>ディレクトリ</translation>
    </message>
    <message>
        <source>Documents</source>
        <translation>ドキュメント</translation>
    </message>
    <message>
        <source>Audio</source>
        <translation>音声</translation>
    </message>
    <message>
        <source>Video</source>
        <translation>ビデオ</translation>
    </message>
    <message>
        <source>Images</source>
        <translation>画像</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>詳細</translation>
    </message>
    <message>
        <source>Choose directory</source>
        <translation>ディレクトリを選択</translation>
    </message>
    <message>
        <source>Enabling file system watches comes with caveats. You should only activate this option if you know what you are doing. A lot of file system changes (compilation, installing, etc) while having watches enabled can put your system under high load.</source>
        <translation>ファイルシステムの監視を有効にするには注意点があります。何をしているか理解している場合のみ、このオプションを有効にする必要があります。監視を有効にした状態で多くのファイルシステム変更（コンパイル、インストールなど）が発生すると、システムに大きな負荷がかかる可能性があります。</translation>
    </message>
    <message>
        <source>Index the entire file path</source>
        <translation>ファイルの完全なパスをインデックス</translation>
    </message>
    <message>
        <source>File browsers</source>
        <translation>ファイルブラウザ</translation>
    </message>
    <message>
        <source>Match case-sensitive</source>
        <translation>大文字小文字を区別</translation>
    </message>
    <message>
        <source>Show hidden files</source>
        <translation>隠しファイルを表示</translation>
    </message>
    <message>
        <source>Sort entries case-insensitve</source>
        <translation>大文字小文字を区別せずにソート</translation>
    </message>
    <message>
        <source>Show dirs first</source>
        <translation>ディレクトリを最初に表示</translation>
    </message>
</context>
<context>
    <name>FileItem</name>
    <message>
        <source>Open with default application</source>
        <translation>デフォルトアプリケーションで開く</translation>
    </message>
    <message>
        <source>Execute</source>
        <translation>実行</translation>
    </message>
    <message>
        <source>Reveal in file browser</source>
        <translation>ファイルブラウザで表示</translation>
    </message>
    <message>
        <source>Open terminal here</source>
        <translation>ここでターミナルを開く</translation>
    </message>
    <message>
        <source>Copy file to clipboard</source>
        <translation>ファイルをクリップボードにコピー</translation>
    </message>
    <message>
        <source>Copy path to clipboard</source>
        <translation>パスをクリップボードにコピー</translation>
    </message>
</context>
<context>
    <name>FsIndexPath</name>
    <message numerus="yes">
        <source>Indexed %n directories in %1.</source>
        <translation>
            <numerusform>%1 で %n 個のディレクトリをインデックスしました。</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>HomeBrowser</name>
    <message>
        <source>Home browser</source>
        <translation>ホームディレクトリブラウザ</translation>
    </message>
    <message>
        <source>Browse home directory by path</source>
        <translation>パスでホームディレクトリを閲覧</translation>
    </message>
</context>
<context>
    <name>MimeFilterDialog</name>
    <message>
        <source>MIME filters</source>
        <translation>MIMEフィルタ</translation>
    </message>
    <message>
        <source>MIME filters are used while indexing to filter files by their MIME type. Files whose MIME type is not matched by any of the MIME filter patterns below are not indexed. The filter patterns support wildcard characters (*). Utilize the MIME types list on the left to find supported MIME types.</source>
        <translation>MIMEフィルタはインデックス時にMIMEタイプでファイルをフィルタリングするために使用されます。以下のMIMEフィルタパターンと一致しないMIMEタイプのファイルはインデックスされません。フィルタパターンはワイルドカード文字（*）をサポートしています。サポートされているMIMEタイプを見つけるには、左側のMIMEタイプリストを活用してください。</translation>
    </message>
    <message>
        <source>Available MIME types</source>
        <translation>利用可能なMIMEタイプ</translation>
    </message>
    <message>
        <source>Filter the available MIME types</source>
        <translation>利用可能なMIMEタイプをフィルタ</translation>
    </message>
    <message>
        <source>MIME filter patterns</source>
        <translation>MIMEフィルタパターン</translation>
    </message>
</context>
<context>
    <name>NameFilterDialog</name>
    <message>
        <source>Ignore patterns</source>
        <translation>除外パターン</translation>
    </message>
    <message>
        <source>Ignore patterns are Perl-compatible regular expressions that can be utilized to exclude files from indexing. The filepath matched is relative to the root directory. Prepending &apos;!&apos; makes the pattern including. Filenames are matched in the order given by the filter list below.</source>
        <translation>除外パターンはPerl互換の正規表現で、ファイルをインデックスから除外するために使用できます。一致するファイルパスはルートディレクトリからの相対パスです。&apos;!&apos; を先頭に付けるとパターンが包含的になります。ファイル名は以下のフィルタリストで与えられた順序で照合されます。</translation>
    </message>
</context>
<context>
    <name>Plugin</name>
    <message>
        <source>Update index</source>
        <translation>インデックスを更新</translation>
    </message>
    <message>
        <source>Update the file index</source>
        <translation>ファイルインデックスを更新</translation>
    </message>
    <message>
        <source>Scan</source>
        <translation>スキャン</translation>
    </message>
    <message>
        <source>Trash</source>
        <translation>ゴミ箱</translation>
    </message>
    <message>
        <source>Your trash folder</source>
        <translation>ゴミ箱フォルダ</translation>
    </message>
    <message>
        <source>Open trash</source>
        <translation>ゴミ箱を開く</translation>
    </message>
    <message>
        <source>Empty trash</source>
        <translation>ゴミ箱を空にする</translation>
    </message>
</context>
<context>
    <name>RootBrowser</name>
    <message>
        <source>Root browser</source>
        <translation>ルートディレクトリブラウザ</translation>
    </message>
    <message>
        <source>Browse root directory by path</source>
        <translation>パスでルートディレクトリを閲覧</translation>
    </message>
</context>
</TS>
