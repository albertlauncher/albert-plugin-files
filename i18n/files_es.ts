<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es_ES">
<context>
    <name>ConfigWidget</name>
    <message>
        <source>The files plugin provides three extensions to access files. The main extension indexes the file system as specified in the settings and provides a lookup by filename. The other two file browsing extensions are triggered by `/` and `~` and provide a way to browse through the file system using paths. This is handy to access files that are _not_ indexed. In combination with the tab completion this is a nice way to browse the file system.</source>
        <translation>El plugin de archivos proporciona tres extensiones para acceder a archivos. La extensión principal indexa el sistema de archivos según lo especificado en la configuración y proporciona una búsqueda por nombre de archivo. Las otras dos extensiones de exploración de archivos se activan con `/` y `~` y proporcionan una forma de navegar por el sistema de archivos usando rutas. Esto es útil para acceder a archivos que _no_ están indexados. En combinación con la completación con tabulador, esta es una buena forma de navegar por el sistema de archivos.</translation>
    </message>
    <message>
        <source>Path settings</source>
        <translation>Configuración de rutas</translation>
    </message>
    <message>
        <source>Indexing</source>
        <translation>Indexación</translation>
    </message>
    <message>
        <source>Index hidden files</source>
        <translation>Indexar archivos ocultos</translation>
    </message>
    <message>
        <source>Follow links</source>
        <translation>Seguir enlaces</translation>
    </message>
    <message>
        <source>This option should by used with care and only if necessary. It may cause indexing of way more files you wanted when the indexed file tree contains links to directories outside the specified file tree.</source>
        <translation>Esta opción debe usarse con precaución y solo si es necesario. Puede causar la indexación de muchos más archivos de los deseados cuando el árbol de archivos indexado contiene enlaces a directorios fuera del árbol de archivos especificado.</translation>
    </message>
    <message>
        <source>Max depth</source>
        <translation>Profundidad máxima</translation>
    </message>
    <message>
        <source>Scan interval</source>
        <translation>Intervalo de escaneo</translation>
    </message>
    <message>
        <source> min</source>
        <extracomment>Abbr. minutes</extracomment>
        <translation> min</translation>
    </message>
    <message>
        <source>Watch filesystem</source>
        <translation>Monitorear sistema de archivos</translation>
    </message>
    <message>
        <source>Ignore patterns</source>
        <translation>Patrones de exclusión</translation>
    </message>
    <message>
        <source>MIME types</source>
        <translation>Tipos MIME</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Directorios</translation>
    </message>
    <message>
        <source>Documents</source>
        <translation>Documentos</translation>
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
        <translation>Imágenes</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Avanzado</translation>
    </message>
    <message>
        <source>Choose directory</source>
        <translation>Seleccionar directorio</translation>
    </message>
    <message>
        <source>Enabling file system watches comes with caveats. You should only activate this option if you know what you are doing. A lot of file system changes (compilation, installing, etc) while having watches enabled can put your system under high load.</source>
        <translation>Habilitar la vigilancia del sistema de archivos conlleva advertencias. Solo debe activar esta opción si sabe lo que está haciendo. Muchos cambios en el sistema de archivos (compilación, instalación, etc.) con la vigilancia habilitada pueden sobrecargar su sistema.</translation>
    </message>
    <message>
        <source>Index the entire file path</source>
        <translation>Indexar la ruta completa del archivo</translation>
    </message>
    <message>
        <source>File browsers</source>
        <translation>Navegadores de archivos</translation>
    </message>
    <message>
        <source>Match case-sensitive</source>
        <translation>Coincidencia sensible a mayúsculas</translation>
    </message>
    <message>
        <source>Show hidden files</source>
        <translation>Mostrar archivos ocultos</translation>
    </message>
    <message>
        <source>Sort entries case-insensitve</source>
        <translation>Ordenar entradas sin distinción de mayúsculas</translation>
    </message>
    <message>
        <source>Show dirs first</source>
        <translation>Mostrar directorios primero</translation>
    </message>
</context>
<context>
    <name>FileItem</name>
    <message>
        <source>Open with default application</source>
        <translation>Abrir con la aplicación predeterminada</translation>
    </message>
    <message>
        <source>Execute</source>
        <translation>Ejecutar</translation>
    </message>
    <message>
        <source>Reveal in file browser</source>
        <translation>Mostrar en el navegador de archivos</translation>
    </message>
    <message>
        <source>Open terminal here</source>
        <translation>Abrir terminal aquí</translation>
    </message>
    <message>
        <source>Copy file to clipboard</source>
        <translation>Copiar archivo al portapapeles</translation>
    </message>
    <message>
        <source>Copy path to clipboard</source>
        <translation>Copiar ruta al portapapeles</translation>
    </message>
</context>
<context>
    <name>FsIndexPath</name>
    <message numerus="yes">
        <source>Indexed %n directories in %1.</source>
        <translation>
            <numerusform>%n directorio indexado en %1.</numerusform>
            <numerusform>%n directorios indexados en %1.</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>HomeBrowser</name>
    <message>
        <source>Home browser</source>
        <translation>Navegador del directorio personal</translation>
    </message>
    <message>
        <source>Browse home directory by path</source>
        <translation>Explorar el directorio personal por ruta</translation>
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
        <translation>Los filtros MIME se utilizan durante la indexación para filtrar archivos por su tipo MIME. Los archivos cuyo tipo MIME no coincide con ningún patrón de filtro MIME a continuación no se indexan. Los patrones de filtro admiten caracteres comodín (*). Utilice la lista de tipos MIME a la izquierda para encontrar los tipos MIME compatibles.</translation>
    </message>
    <message>
        <source>Available MIME types</source>
        <translation>Tipos MIME disponibles</translation>
    </message>
    <message>
        <source>Filter the available MIME types</source>
        <translation>Filtrar los tipos MIME disponibles</translation>
    </message>
    <message>
        <source>MIME filter patterns</source>
        <translation>Patrones de filtro MIME</translation>
    </message>
</context>
<context>
    <name>NameFilterDialog</name>
    <message>
        <source>Ignore patterns</source>
        <translation>Patrones de exclusión</translation>
    </message>
    <message>
        <source>Ignore patterns are Perl-compatible regular expressions that can be utilized to exclude files from indexing. The filepath matched is relative to the root directory. Prepending &apos;!&apos; makes the pattern including. Filenames are matched in the order given by the filter list below.</source>
        <translation>Los patrones de exclusión son expresiones regulares compatibles con Perl que se pueden utilizar para excluir archivos de la indexación. La ruta de archivo coincide de forma relativa al directorio raíz. Anteponer &apos;!&apos; hace que el patrón sea inclusivo. Los nombres de archivo se comparan en el orden dado por la lista de filtros a continuación.</translation>
    </message>
</context>
<context>
    <name>Plugin</name>
    <message>
        <source>Update index</source>
        <translation>Actualizar índice</translation>
    </message>
    <message>
        <source>Update the file index</source>
        <translation>Actualizar el índice de archivos</translation>
    </message>
    <message>
        <source>Scan</source>
        <translation>Escanear</translation>
    </message>
    <message>
        <source>Trash</source>
        <translation>Papelera</translation>
    </message>
    <message>
        <source>Your trash folder</source>
        <translation>Su carpeta de papelera</translation>
    </message>
    <message>
        <source>Open trash</source>
        <translation>Abrir papelera</translation>
    </message>
    <message>
        <source>Empty trash</source>
        <translation>Vaciar papelera</translation>
    </message>
</context>
<context>
    <name>RootBrowser</name>
    <message>
        <source>Root browser</source>
        <translation>Navegador raíz</translation>
    </message>
    <message>
        <source>Browse root directory by path</source>
        <translation>Explorar el directorio raíz por ruta</translation>
    </message>
</context>
</TS>
