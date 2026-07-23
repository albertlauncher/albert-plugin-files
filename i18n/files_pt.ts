<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pt_BR">
<context>
    <name>ConfigWidget</name>
    <message>
        <source>The files plugin provides three extensions to access files. The main extension indexes the file system as specified in the settings and provides a lookup by filename. The other two file browsing extensions are triggered by `/` and `~` and provide a way to browse through the file system using paths. This is handy to access files that are _not_ indexed. In combination with the tab completion this is a nice way to browse the file system.</source>
        <translation>O plugin de arquivos fornece três extensões para acessar arquivos. A extensão principal indexa o sistema de arquivos conforme especificado nas configurações e fornece uma pesquisa por nome de arquivo. As outras duas extensões de navegação de arquivos são acionadas por `/` e `~` e fornecem uma maneira de navegar pelo sistema de arquivos usando caminhos. Isso é útil para acessar arquivos que _não_ estão indexados. Em combinação com a conclusão por tabulação, esta é uma boa maneira de navegar pelo sistema de arquivos.</translation>
    </message>
    <message>
        <source>Path settings</source>
        <translation>Configurações de caminho</translation>
    </message>
    <message>
        <source>Indexing</source>
        <translation>Indexação</translation>
    </message>
    <message>
        <source>Index hidden files</source>
        <translation>Indexar arquivos ocultos</translation>
    </message>
    <message>
        <source>Follow links</source>
        <translation>Seguir links</translation>
    </message>
    <message>
        <source>This option should by used with care and only if necessary. It may cause indexing of way more files you wanted when the indexed file tree contains links to directories outside the specified file tree.</source>
        <translation>Esta opção deve ser usada com cuidado e apenas se necessário. Ela pode causar a indexação de muito mais arquivos do que o desejado quando a árvore de arquivos indexada contém links para diretórios fora da árvore de arquivos especificada.</translation>
    </message>
    <message>
        <source>Max depth</source>
        <translation>Profundidade máxima</translation>
    </message>
    <message>
        <source>Scan interval</source>
        <translation>Intervalo de verificação</translation>
    </message>
    <message>
        <source> min</source>
        <extracomment>Abbr. minutes</extracomment>
        <translation> min</translation>
    </message>
    <message>
        <source>Watch filesystem</source>
        <translation>Monitorar sistema de arquivos</translation>
    </message>
    <message>
        <source>Ignore patterns</source>
        <translation>Padrões de exclusão</translation>
    </message>
    <message>
        <source>MIME types</source>
        <translation>Tipos MIME</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Diretórios</translation>
    </message>
    <message>
        <source>Documents</source>
        <translation>Documentos</translation>
    </message>
    <message>
        <source>Audio</source>
        <translation>Áudio</translation>
    </message>
    <message>
        <source>Video</source>
        <translation>Vídeo</translation>
    </message>
    <message>
        <source>Images</source>
        <translation>Imagens</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Avançado</translation>
    </message>
    <message>
        <source>Choose directory</source>
        <translation>Selecionar diretório</translation>
    </message>
    <message>
        <source>Enabling file system watches comes with caveats. You should only activate this option if you know what you are doing. A lot of file system changes (compilation, installing, etc) while having watches enabled can put your system under high load.</source>
        <translation>Habilitar a monitoragem do sistema de arquivos tem ressalvas. Você só deve ativar esta opção se souber o que está fazendo. Muitas alterações no sistema de arquivos (compilação, instalação, etc.) com a monitoragem habilitada podem sobrecarregar seu sistema.</translation>
    </message>
    <message>
        <source>Index the entire file path</source>
        <translation>Indexar o caminho completo do arquivo</translation>
    </message>
    <message>
        <source>File browsers</source>
        <translation>Navegadores de arquivos</translation>
    </message>
    <message>
        <source>Match case-sensitive</source>
        <translation>Correspondência sensível a maiúsculas</translation>
    </message>
    <message>
        <source>Show hidden files</source>
        <translation>Mostrar arquivos ocultos</translation>
    </message>
    <message>
        <source>Sort entries case-insensitve</source>
        <translation>Ordenar entradas sem distinção de maiúsculas</translation>
    </message>
    <message>
        <source>Show dirs first</source>
        <translation>Mostrar diretórios primeiro</translation>
    </message>
</context>
<context>
    <name>FileItem</name>
    <message>
        <source>Open with default application</source>
        <translation>Abrir com o aplicativo padrão</translation>
    </message>
    <message>
        <source>Execute</source>
        <translation>Executar</translation>
    </message>
    <message>
        <source>Reveal in file browser</source>
        <translation>Mostrar no navegador de arquivos</translation>
    </message>
    <message>
        <source>Open terminal here</source>
        <translation>Abrir terminal aqui</translation>
    </message>
    <message>
        <source>Copy file to clipboard</source>
        <translation>Copiar arquivo para a área de transferência</translation>
    </message>
    <message>
        <source>Copy path to clipboard</source>
        <translation>Copiar caminho para a área de transferência</translation>
    </message>
</context>
<context>
    <name>FsIndexPath</name>
    <message numerus="yes">
        <source>Indexed %n directories in %1.</source>
        <translation>
            <numerusform>%n diretório indexado em %1.</numerusform>
            <numerusform>%n diretórios indexados em %1.</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>HomeBrowser</name>
    <message>
        <source>Home browser</source>
        <translation>Navegador do diretório pessoal</translation>
    </message>
    <message>
        <source>Browse home directory by path</source>
        <translation>Navegar no diretório pessoal por caminho</translation>
    </message>
</context>
<context>
    <name>MimeFilterDialog</name>
    <message>
        <source>MIME filters</source>
        <translation>Filtros MIME</translation>
    </message>
    <message>
        <source>MIME filters are used while indexing to filter files by their MIME type. Files whose MIME type is not matched by any of the MIME filter patterns below are not indexed. The filter patterns support wildcard characters (*). Utilize the MIME types list on the left to find supported MIME types.</source>
        <translation>Os filtros MIME são usados durante a indexação para filtrar arquivos por seu tipo MIME. Arquivos cujo tipo MIME não corresponde a nenhum dos padrões de filtro MIME abaixo não são indexados. Os padrões de filtro suportam caracteres curinga (*). Utilize a lista de tipos MIME à esquerda para encontrar os tipos MIME suportados.</translation>
    </message>
    <message>
        <source>Available MIME types</source>
        <translation>Tipos MIME disponíveis</translation>
    </message>
    <message>
        <source>Filter the available MIME types</source>
        <translation>Filtrar os tipos MIME disponíveis</translation>
    </message>
    <message>
        <source>MIME filter patterns</source>
        <translation>Padrões de filtro MIME</translation>
    </message>
</context>
<context>
    <name>NameFilterDialog</name>
    <message>
        <source>Ignore patterns</source>
        <translation>Padrões de exclusão</translation>
    </message>
    <message>
        <source>Ignore patterns are Perl-compatible regular expressions that can be utilized to exclude files from indexing. The filepath matched is relative to the root directory. Prepending &apos;!&apos; makes the pattern including. Filenames are matched in the order given by the filter list below.</source>
        <translation>Os padrões de exclusão são expressões regulares compatíveis com Perl que podem ser utilizadas para excluir arquivos da indexação. O caminho do arquivo correspondente é relativo ao diretório raiz. Adicionar &apos;!&apos; na frente torna o padrão inclusivo. Os nomes de arquivos são correspondidos na ordem dada pela lista de filtros abaixo.</translation>
    </message>
</context>
<context>
    <name>Plugin</name>
    <message>
        <source>Update index</source>
        <translation>Atualizar índice</translation>
    </message>
    <message>
        <source>Update the file index</source>
        <translation>Atualizar o índice de arquivos</translation>
    </message>
    <message>
        <source>Scan</source>
        <translation>Verificar</translation>
    </message>
    <message>
        <source>Trash</source>
        <translation>Lixeira</translation>
    </message>
    <message>
        <source>Your trash folder</source>
        <translation>Sua pasta de lixeira</translation>
    </message>
    <message>
        <source>Open trash</source>
        <translation>Abrir lixeira</translation>
    </message>
    <message>
        <source>Empty trash</source>
        <translation>Esvaziar lixeira</translation>
    </message>
</context>
<context>
    <name>RootBrowser</name>
    <message>
        <source>Root browser</source>
        <translation>Navegador raiz</translation>
    </message>
    <message>
        <source>Browse root directory by path</source>
        <translation>Navegar no diretório raiz por caminho</translation>
    </message>
</context>
</TS>
