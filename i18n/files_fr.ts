<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>ConfigWidget</name>
    <message>
        <source>The files plugin provides three extensions to access files. The main extension indexes the file system as specified in the settings and provides a lookup by filename. The other two file browsing extensions are triggered by `/` and `~` and provide a way to browse through the file system using paths. This is handy to access files that are _not_ indexed. In combination with the tab completion this is a nice way to browse the file system.</source>
        <translation>Le plugin fichiers fournit trois extensions pour accéder aux fichiers. L&apos;extension principale indexe le système de fichiers tel que spécifié dans les paramètres et fournit une recherche par nom de fichier. Les deux autres extensions de navigation de fichiers sont déclenchées par `/` et `~` et offrent un moyen de parcourir le système de fichiers en utilisant des chemins. Cela est pratique pour accéder aux fichiers qui ne sont _pas_ indexés. En combinaison avec l&apos;achèvement par tabulation, c&apos;est un bon moyen de parcourir le système de fichiers.</translation>
    </message>
    <message>
        <source>Path settings</source>
        <translation>Paramètres de chemin</translation>
    </message>
    <message>
        <source>Indexing</source>
        <translation>Indexation</translation>
    </message>
    <message>
        <source>Index hidden files</source>
        <translation>Indexer les fichiers cachés</translation>
    </message>
    <message>
        <source>Follow links</source>
        <translation>Suivre les liens</translation>
    </message>
    <message>
        <source>This option should by used with care and only if necessary. It may cause indexing of way more files you wanted when the indexed file tree contains links to directories outside the specified file tree.</source>
        <translation>Cette option doit être utilisée avec précaution et uniquement si nécessaire. Elle peut entraîner l&apos;indexation de beaucoup plus de fichiers que prévu lorsque l&apos;arborescence indexée contient des liens vers des répertoires en dehors de l&apos;arborescence spécifiée.</translation>
    </message>
    <message>
        <source>Max depth</source>
        <translation>Profondeur maximale</translation>
    </message>
    <message>
        <source>Scan interval</source>
        <translation>Intervalle de numérisation</translation>
    </message>
    <message>
        <source> min</source>
        <extracomment>Abbr. minutes</extracomment>
        <translation> min</translation>
    </message>
    <message>
        <source>Watch filesystem</source>
        <translation>Surveiller le système de fichiers</translation>
    </message>
    <message>
        <source>Ignore patterns</source>
        <translation>Modèles d&apos;exclusion</translation>
    </message>
    <message>
        <source>MIME types</source>
        <translation>Types MIME</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Répertoires</translation>
    </message>
    <message>
        <source>Documents</source>
        <translation>Documents</translation>
    </message>
    <message>
        <source>Audio</source>
        <translation>Audio</translation>
    </message>
    <message>
        <source>Video</source>
        <translation>Vidéo</translation>
    </message>
    <message>
        <source>Images</source>
        <translation>Images</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Avancé</translation>
    </message>
    <message>
        <source>Choose directory</source>
        <translation>Choisir le répertoire</translation>
    </message>
    <message>
        <source>Enabling file system watches comes with caveats. You should only activate this option if you know what you are doing. A lot of file system changes (compilation, installing, etc) while having watches enabled can put your system under high load.</source>
        <translation>L&apos;activation de la surveillance du système de fichiers comporte des mises en garde. Vous ne devriez activer cette option que si vous savez ce que vous faites. De nombreuses modifications du système de fichiers (compilation, installation, etc.) avec la surveillance activée peuvent mettre votre système sous forte charge.</translation>
    </message>
    <message>
        <source>Index the entire file path</source>
        <translation>Indexer le chemin complet du fichier</translation>
    </message>
    <message>
        <source>File browsers</source>
        <translation>Navigateurs de fichiers</translation>
    </message>
    <message>
        <source>Match case-sensitive</source>
        <translation>Correspondence sensible à la casse</translation>
    </message>
    <message>
        <source>Show hidden files</source>
        <translation>Afficher les fichiers cachés</translation>
    </message>
    <message>
        <source>Sort entries case-insensitve</source>
        <translation>Trier les entrées sans distinction de casse</translation>
    </message>
    <message>
        <source>Show dirs first</source>
        <translation>Afficher les répertoires en premier</translation>
    </message>
</context>
<context>
    <name>FileItem</name>
    <message>
        <source>Open with default application</source>
        <translation>Ouvrir avec l&apos;application par défaut</translation>
    </message>
    <message>
        <source>Execute</source>
        <translation>Exécuter</translation>
    </message>
    <message>
        <source>Reveal in file browser</source>
        <translation>Afficher dans le navigateur de fichiers</translation>
    </message>
    <message>
        <source>Open terminal here</source>
        <translation>Ouvrir un terminal ici</translation>
    </message>
    <message>
        <source>Copy file to clipboard</source>
        <translation>Copier le fichier dans le presse-papiers</translation>
    </message>
    <message>
        <source>Copy path to clipboard</source>
        <translation>Copier le chemin dans le presse-papiers</translation>
    </message>
</context>
<context>
    <name>FsIndexPath</name>
    <message numerus="yes">
        <source>Indexed %n directories in %1.</source>
        <translation>
            <numerusform>%n répertoire indexé dans %1.</numerusform>
            <numerusform>%n répertoires indexés dans %1.</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>HomeBrowser</name>
    <message>
        <source>Home browser</source>
        <translation>Navigateur du répertoire personnel</translation>
    </message>
    <message>
        <source>Browse home directory by path</source>
        <translation>Parcourir le répertoire personnel par chemin</translation>
    </message>
</context>
<context>
    <name>MimeFilterDialog</name>
    <message>
        <source>MIME filters</source>
        <translation>Filtres MIME</translation>
    </message>
    <message>
        <source>MIME filters are used while indexing to filter files by their MIME type. Files whose MIME type is not matched by any of the MIME filter patterns below are not indexed. The filter patterns support wildcard characters (*). Utilize the MIME types list on the left to find supported MIME types.</source>
        <translation>Les filtres MIME sont utilisés lors de l&apos;indexation pour filtrer les fichiers par leur type MIME. Les fichiers dont le type MIME ne correspond à aucun des modèles de filtre MIME ci-dessous ne sont pas indexés. Les modèles de filtre prennent en charge les caractères génériques (*). Utilisez la liste des types MIME à gauche pour trouver les types MIME pris en charge.</translation>
    </message>
    <message>
        <source>Available MIME types</source>
        <translation>Types MIME disponibles</translation>
    </message>
    <message>
        <source>Filter the available MIME types</source>
        <translation>Filtrer les types MIME disponibles</translation>
    </message>
    <message>
        <source>MIME filter patterns</source>
        <translation>Modèles de filtre MIME</translation>
    </message>
</context>
<context>
    <name>NameFilterDialog</name>
    <message>
        <source>Ignore patterns</source>
        <translation>Modèles d&apos;exclusion</translation>
    </message>
    <message>
        <source>Ignore patterns are Perl-compatible regular expressions that can be utilized to exclude files from indexing. The filepath matched is relative to the root directory. Prepending &apos;!&apos; makes the pattern including. Filenames are matched in the order given by the filter list below.</source>
        <translation>Les modèles d&apos;exclusion sont des expressions régulières compatibles Perl qui peuvent être utilisées pour exclure des fichiers de l&apos;indexation. Le chemin de fichier correspondant est relatif au répertoire racine. L&apos;ajout de &apos;!&apos; devant rend le modèle inclusif. Les noms de fichiers sont comparés dans l&apos;ordre donné par la liste de filtres ci-dessous.</translation>
    </message>
</context>
<context>
    <name>Plugin</name>
    <message>
        <source>Update index</source>
        <translation>Mettre à jour l&apos;index</translation>
    </message>
    <message>
        <source>Update the file index</source>
        <translation>Mettre à jour l&apos;index des fichiers</translation>
    </message>
    <message>
        <source>Scan</source>
        <translation>Numériser</translation>
    </message>
    <message>
        <source>Trash</source>
        <translation>Corbeille</translation>
    </message>
    <message>
        <source>Your trash folder</source>
        <translation>Votre dossier corbeille</translation>
    </message>
    <message>
        <source>Open trash</source>
        <translation>Ouvrir la corbeille</translation>
    </message>
    <message>
        <source>Empty trash</source>
        <translation>Vider la corbeille</translation>
    </message>
</context>
<context>
    <name>RootBrowser</name>
    <message>
        <source>Root browser</source>
        <translation>Navigateur racine</translation>
    </message>
    <message>
        <source>Browse root directory by path</source>
        <translation>Parcourir le répertoire racine par chemin</translation>
    </message>
</context>
</TS>
