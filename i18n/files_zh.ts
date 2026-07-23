<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>ConfigWidget</name>
    <message>
        <source>The files plugin provides three extensions to access files. The main extension indexes the file system as specified in the settings and provides a lookup by filename. The other two file browsing extensions are triggered by `/` and `~` and provide a way to browse through the file system using paths. This is handy to access files that are _not_ indexed. In combination with the tab completion this is a nice way to browse the file system.</source>
        <translation>文件插件提供三个扩展来访问文件。主扩展按照设置中的指定索引文件系统，并提供按文件名查找功能。另外两个文件浏览扩展由 `/` 和 `~` 触发，提供使用路径浏览文件系统的方式。这对于访问未被索引的文件非常方便。与 Tab 补全结合使用，这是浏览文件系统的好方法。</translation>
    </message>
    <message>
        <source>Path settings</source>
        <translation>路径设置</translation>
    </message>
    <message>
        <source>Indexing</source>
        <translation>索引</translation>
    </message>
    <message>
        <source>Index hidden files</source>
        <translation>索引隐藏文件</translation>
    </message>
    <message>
        <source>Follow links</source>
        <translation>跟踪链接</translation>
    </message>
    <message>
        <source>This option should by used with care and only if necessary. It may cause indexing of way more files you wanted when the indexed file tree contains links to directories outside the specified file tree.</source>
        <translation>此选项应谨慎使用，仅在必要时启用。当索引的文件树包含指向指定文件树之外的目录链接时，可能会导致比预期更多的文件被索引。</translation>
    </message>
    <message>
        <source>Max depth</source>
        <translation>最大深度</translation>
    </message>
    <message>
        <source>Scan interval</source>
        <translation>扫描间隔</translation>
    </message>
    <message>
        <source> min</source>
        <extracomment>Abbr. minutes</extracomment>
        <translation> 分钟</translation>
    </message>
    <message>
        <source>Watch filesystem</source>
        <translation>监视文件系统</translation>
    </message>
    <message>
        <source>Ignore patterns</source>
        <translation>排除模式</translation>
    </message>
    <message>
        <source>MIME types</source>
        <translation>MIME 类型</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>目录</translation>
    </message>
    <message>
        <source>Documents</source>
        <translation>文档</translation>
    </message>
    <message>
        <source>Audio</source>
        <translation>音频</translation>
    </message>
    <message>
        <source>Video</source>
        <translation>视频</translation>
    </message>
    <message>
        <source>Images</source>
        <translation>图片</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>高级</translation>
    </message>
    <message>
        <source>Choose directory</source>
        <translation>选择目录</translation>
    </message>
    <message>
        <source>Enabling file system watches comes with caveats. You should only activate this option if you know what you are doing. A lot of file system changes (compilation, installing, etc) while having watches enabled can put your system under high load.</source>
        <translation>启用文件系统监视需要注意事项。只有在您清楚自己在做什么时才应启用此选项。在启用监视时大量的文件系统更改（编译、安装等）可能会使您的系统承受高负载。</translation>
    </message>
    <message>
        <source>Index the entire file path</source>
        <translation>索引完整文件路径</translation>
    </message>
    <message>
        <source>File browsers</source>
        <translation>文件浏览器</translation>
    </message>
    <message>
        <source>Match case-sensitive</source>
        <translation>区分大小写匹配</translation>
    </message>
    <message>
        <source>Show hidden files</source>
        <translation>显示隐藏文件</translation>
    </message>
    <message>
        <source>Sort entries case-insensitve</source>
        <translation>不区分大小写排序</translation>
    </message>
    <message>
        <source>Show dirs first</source>
        <translation>优先显示目录</translation>
    </message>
</context>
<context>
    <name>FileItem</name>
    <message>
        <source>Open with default application</source>
        <translation>用默认应用程序打开</translation>
    </message>
    <message>
        <source>Execute</source>
        <translation>执行</translation>
    </message>
    <message>
        <source>Reveal in file browser</source>
        <translation>在文件浏览器中显示</translation>
    </message>
    <message>
        <source>Open terminal here</source>
        <translation>在此打开终端</translation>
    </message>
    <message>
        <source>Copy file to clipboard</source>
        <translation>复制文件到剪贴板</translation>
    </message>
    <message>
        <source>Copy path to clipboard</source>
        <translation>复制路径到剪贴板</translation>
    </message>
</context>
<context>
    <name>FsIndexPath</name>
    <message numerus="yes">
        <source>Indexed %n directories in %1.</source>
        <translation>
            <numerusform>在 %1 中索引了 %n 个目录。</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>HomeBrowser</name>
    <message>
        <source>Home browser</source>
        <translation>主目录浏览器</translation>
    </message>
    <message>
        <source>Browse home directory by path</source>
        <translation>按路径浏览主目录</translation>
    </message>
</context>
<context>
    <name>MimeFilterDialog</name>
    <message>
        <source>MIME filters</source>
        <translation>MIME 过滤器</translation>
    </message>
    <message>
        <source>MIME filters are used while indexing to filter files by their MIME type. Files whose MIME type is not matched by any of the MIME filter patterns below are not indexed. The filter patterns support wildcard characters (*). Utilize the MIME types list on the left to find supported MIME types.</source>
        <translation>MIME 过滤器在索引时用于按 MIME 类型过滤文件。不匹配以下任何 MIME 过滤器模式的 MIME 类型文件不会被索引。过滤器模式支持通配符 (*)。请利用左侧的 MIME 类型列表查找支持的 MIME 类型。</translation>
    </message>
    <message>
        <source>Available MIME types</source>
        <translation>可用的 MIME 类型</translation>
    </message>
    <message>
        <source>Filter the available MIME types</source>
        <translation>过滤可用的 MIME 类型</translation>
    </message>
    <message>
        <source>MIME filter patterns</source>
        <translation>MIME 过滤器模式</translation>
    </message>
</context>
<context>
    <name>NameFilterDialog</name>
    <message>
        <source>Ignore patterns</source>
        <translation>排除模式</translation>
    </message>
    <message>
        <source>Ignore patterns are Perl-compatible regular expressions that can be utilized to exclude files from indexing. The filepath matched is relative to the root directory. Prepending &apos;!&apos; makes the pattern including. Filenames are matched in the order given by the filter list below.</source>
        <translation>排除模式是 Perl 兼容的正则表达式，可用于将文件排除在索引之外。匹配的文件路径相对于根目录。在前面添加 &apos;!&apos; 会使模式变为包含模式。文件名按以下过滤器列表中给出的顺序进行匹配。</translation>
    </message>
</context>
<context>
    <name>Plugin</name>
    <message>
        <source>Update index</source>
        <translation>更新索引</translation>
    </message>
    <message>
        <source>Update the file index</source>
        <translation>更新文件索引</translation>
    </message>
    <message>
        <source>Scan</source>
        <translation>扫描</translation>
    </message>
    <message>
        <source>Trash</source>
        <translation>回收站</translation>
    </message>
    <message>
        <source>Your trash folder</source>
        <translation>您的回收站文件夹</translation>
    </message>
    <message>
        <source>Open trash</source>
        <translation>打开回收站</translation>
    </message>
    <message>
        <source>Empty trash</source>
        <translation>清空回收站</translation>
    </message>
</context>
<context>
    <name>RootBrowser</name>
    <message>
        <source>Root browser</source>
        <translation>根目录浏览器</translation>
    </message>
    <message>
        <source>Browse root directory by path</source>
        <translation>按路径浏览根目录</translation>
    </message>
</context>
</TS>
