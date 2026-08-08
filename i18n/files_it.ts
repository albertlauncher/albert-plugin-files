<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it_IT">
<context>
    <name>ConfigWidget</name>
    <message>
        <source>The files plugin provides three extensions to access files. The main extension indexes the file system as specified in the settings and provides a lookup by filename. The other two file browsing extensions are triggered by `/` and `~` and provide a way to browse through the file system using paths. This is handy to access files that are _not_ indexed. In combination with the tab completion this is a nice way to browse the file system.</source>
        <translation>Il plugin file fornisce tre estensioni per accedere ai file. L&apos;estensione principale indica il file system come specificato nelle impostazioni e fornisce una ricerca per nome file. Le altre due estensioni di navigazione file vengono attivate da `/` e `~` e forniscono un modo per navigare nel file system usando i percorsi. Questo è utile per accedere ai file che _non_ sono indicizzati. In combinazione con il completamento con tab, è un ottimo modo per navigare il file system.</translation>
    </message>
    <message>
        <source>Path settings</source>
        <translation>Impostazioni percorso</translation>
    </message>
    <message>
        <source>Indexing</source>
        <translation>Indicizzazione</translation>
    </message>
    <message>
        <source>Index hidden files</source>
        <translation>Indica i file nascosti</translation>
    </message>
    <message>
        <source>Follow links</source>
        <translation>Segui i collegamenti</translation>
    </message>
    <message>
        <source>This option should by used with care and only if necessary. It may cause indexing of way more files you wanted when the indexed file tree contains links to directories outside the specified file tree.</source>
        <translation>Questa opzione dovrebbe essere usata con cautela e solo se necessario. Potrebbe causare l&apos;indicizzazione di molti più file del previsto quando l&apos;albero dei file indicizzato contiene collegamenti a directory al di fuori dell&apos;albero dei file specificato.</translation>
    </message>
    <message>
        <source>Max depth</source>
        <translation>Profondità massima</translation>
    </message>
    <message>
        <source>Scan interval</source>
        <translation>Intervallo di scansione</translation>
    </message>
    <message>
        <source> min</source>
        <extracomment>Abbr. minutes</extracomment>
        <translation> min</translation>
    </message>
    <message>
        <source>Watch filesystem</source>
        <translation>Monitora il file system</translation>
    </message>
    <message>
        <source>Ignore patterns</source>
        <translation>Pattern da ignorare</translation>
    </message>
    <message>
        <source>MIME types</source>
        <translation>Tipi MIME</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Directory</translation>
    </message>
    <message>
        <source>Documents</source>
        <translation>Documenti</translation>
    </message>
    <message>
        <source>Audio</source>
        <translation>Audio</translation>
    </message>
    <message>
        <source>Video</source>
        <translation>Video</translation>
    </message>
    <message>
        <source>Images</source>
        <translation>Immagini</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Avanzate</translation>
    </message>
    <message>
        <source>Choose directory</source>
        <translation>Scegli directory</translation>
    </message>
    <message>
        <source>Enabling file system watches comes with caveats. You should only activate this option if you know what you are doing. A lot of file system changes (compilation, installing, etc) while having watches enabled can put your system under high load.</source>
        <translation>L&apos;abilitazione del monitoraggio del file system comporta dei rischi. Dovresti abilitare questa opzione solo se sai cosa stai facendo. Molti cambiamenti al file system (compilazione, installazione, ecc.) con il monitoraggio attivato possono mettere il sistema sotto alto carico.</translation>
    </message>
    <message>
        <source>Index the entire file path</source>
        <translation>Indica l&apos;intero percorso del file</translation>
    </message>
    <message>
        <source>File browsers</source>
        <translation>Navigatori file</translation>
    </message>
    <message>
        <source>Match case-sensitive</source>
        <translation>Corrispondenza maiuscole/minuscole</translation>
    </message>
    <message>
        <source>Show hidden files</source>
        <translation>Mostra file nascosti</translation>
    </message>
    <message>
        <source>Sort entries case-insensitve</source>
        <translation>Ordina voci senza distinzione maiuscole/minuscole</translation>
    </message>
    <message>
        <source>Show dirs first</source>
        <translation>Mostra le directory per prime</translation>
    </message>
</context>
<context>
    <name>FileItem</name>
    <message>
        <source>Open with default application</source>
        <translation>Apri con l&apos;applicazione predefinita</translation>
    </message>
    <message>
        <source>Execute</source>
        <translation>Esegui</translation>
    </message>
    <message>
        <source>Reveal in file browser</source>
        <translation>Mostra nel navigatore file</translation>
    </message>
    <message>
        <source>Open terminal here</source>
        <translation>Apri terminale qui</translation>
    </message>
    <message>
        <source>Copy file to clipboard</source>
        <translation>Copia il file negli appunti</translation>
    </message>
    <message>
        <source>Copy path to clipboard</source>
        <translation>Copia il percorso negli appunti</translation>
    </message>
</context>
<context>
    <name>FsIndexPath</name>
    <message numerus="yes">
        <source>Indexed %n directories in %1.</source>
        <translation>
            <numerusform>Indicizzata %n directory in %1.</numerusform>
            <numerusform>Indicizzate %n directory in %1.</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>HomeBrowser</name>
    <message>
        <source>Home browser</source>
        <translation>Navigatore home</translation>
    </message>
    <message>
        <source>Browse home directory by path</source>
        <translation>Naviga la directory home per percorso</translation>
    </message>
</context>
<context>
    <name>MimeFilterDialog</name>
    <message>
        <source>MIME filters</source>
        <translation>Filtri MIME</translation>
    </message>
    <message>
        <source>MIME filters are used while indexing to filter files by their MIME type. Files whose MIME type is not matched by any of the MIME filter patterns below are not indexed. The filter patterns support wildcard characters (*). Utilize the MIME types list on the left to find supported MIME types.</source>
        <translation>I filtri MIME vengono usati durante l&apos;indicizzazione per filtrare i file per tipo MIME. I file il cui tipo MIME non corrisponde a nessuno dei pattern dei filtri MIME riportati di seguito non vengono indicizzati. I pattern dei filtri supportano caratteri jolly (*). Usa la lista dei tipi MIME a sinistra per trovare i tipi MIME supportati.</translation>
    </message>
    <message>
        <source>Available MIME types</source>
        <translation>Tipi MIME disponibili</translation>
    </message>
    <message>
        <source>Filter the available MIME types</source>
        <translation>Filtra i tipi MIME disponibili</translation>
    </message>
    <message>
        <source>MIME filter patterns</source>
        <translation>Pattern dei filtri MIME</translation>
    </message>
</context>
<context>
    <name>NameFilterDialog</name>
    <message>
        <source>Ignore patterns</source>
        <translation>Pattern da ignorare</translation>
    </message>
    <message>
        <source>Ignore patterns are Perl-compatible regular expressions that can be utilized to exclude files from indexing. The filepath matched is relative to the root directory. Prepending &apos;!&apos; makes the pattern including. Filenames are matched in the order given by the filter list below.</source>
        <translation>I pattern da ignorare sono espressioni regolari compatibili con Perl che possono essere utilizzate per escludere i file dall&apos;indicizzazione. Il percorso del file corrispondente è relativo alla directory radice. L&apos;aggiunta di &apos;!&apos; davanti rende il pattern inclusivo. I nomi dei file vengono confrontati nell&apos;ordine indicato dalla lista dei filtri qui sotto.</translation>
    </message>
</context>
<context>
    <name>Plugin</name>
    <message>
        <source>Update index</source>
        <translation>Aggiorna indice</translation>
    </message>
    <message>
        <source>Update the file index</source>
        <translation>Aggiorna l&apos;indice dei file</translation>
    </message>
    <message>
        <source>Scan</source>
        <translation>Scansiona</translation>
    </message>
    <message>
        <source>Trash</source>
        <translation>Cestino</translation>
    </message>
    <message>
        <source>Your trash folder</source>
        <translation>La tua cartella cestino</translation>
    </message>
    <message>
        <source>Open trash</source>
        <translation>Apri cestino</translation>
    </message>
    <message>
        <source>Empty trash</source>
        <translation>Svuota cestino</translation>
    </message>
</context>
<context>
    <name>RootBrowser</name>
    <message>
        <source>Root browser</source>
        <translation>Navigatore root</translation>
    </message>
    <message>
        <source>Browse root directory by path</source>
        <translation>Naviga la directory root per percorso</translation>
    </message>
</context>
</TS>
