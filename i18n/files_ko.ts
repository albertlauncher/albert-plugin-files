<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ko_KR">
<context>
    <name>ConfigWidget</name>
    <message>
        <source>The files plugin provides three extensions to access files. The main extension indexes the file system as specified in the settings and provides a lookup by filename. The other two file browsing extensions are triggered by `/` and `~` and provide a way to browse through the file system using paths. This is handy to access files that are _not_ indexed. In combination with the tab completion this is a nice way to browse the file system.</source>
        <translation>파일 플러그인은 파일에 접근하기 위한 세 가지 확장을 제공합니다. 메인 확장은 설정에서 지정된 대로 파일 시스템을 색인하고 파일 이름으로 조회를 제공합니다. 다른 두 파일 브라우저 확장은 `/`와 `~`로 트리거되며 경로를 사용하여 파일 시스템을 탐색하는 방법을 제공합니다. 이는 색인되지 _않은_ 파일에 접근하는 데 유용합니다. 탭 완성과 결합하면 파일 시스템을 탐색하는 좋은 방법입니다.</translation>
    </message>
    <message>
        <source>Path settings</source>
        <translation>경로 설정</translation>
    </message>
    <message>
        <source>Indexing</source>
        <translation>색인</translation>
    </message>
    <message>
        <source>Index hidden files</source>
        <translation>숨김 파일 색인</translation>
    </message>
    <message>
        <source>Follow links</source>
        <translation>링크 추적</translation>
    </message>
    <message>
        <source>This option should by used with care and only if necessary. It may cause indexing of way more files you wanted when the indexed file tree contains links to directories outside the specified file tree.</source>
        <translation>이 옵션은 주의하여 사용해야 하며 필요한 경우에만 사용해야 합니다. 색인된 파일 트리에 지정된 파일 트리 외부의 디렉토리에 대한 링크가 포함된 경우 의도한 것보다 훨씬 더 많은 파일이 색인될 수 있습니다.</translation>
    </message>
    <message>
        <source>Max depth</source>
        <translation>최대 깊이</translation>
    </message>
    <message>
        <source>Scan interval</source>
        <translation>스캔 간격</translation>
    </message>
    <message>
        <source> min</source>
        <extracomment>Abbr. minutes</extracomment>
        <translation> 분</translation>
    </message>
    <message>
        <source>Watch filesystem</source>
        <translation>파일 시스템 감시</translation>
    </message>
    <message>
        <source>Ignore patterns</source>
        <translation>제외 패턴</translation>
    </message>
    <message>
        <source>MIME types</source>
        <translation>MIME 유형</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>디렉토리</translation>
    </message>
    <message>
        <source>Documents</source>
        <translation>문서</translation>
    </message>
    <message>
        <source>Audio</source>
        <translation>오디오</translation>
    </message>
    <message>
        <source>Video</source>
        <translation>비디오</translation>
    </message>
    <message>
        <source>Images</source>
        <translation>이미지</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>고급</translation>
    </message>
    <message>
        <source>Choose directory</source>
        <translation>디렉토리 선택</translation>
    </message>
    <message>
        <source>Enabling file system watches comes with caveats. You should only activate this option if you know what you are doing. A lot of file system changes (compilation, installing, etc) while having watches enabled can put your system under high load.</source>
        <translation>파일 시스템 감시를 활성화하면 주의 사항이 있습니다. 무엇을 하는지 알고 있을 때만 이 옵션을 활성화해야 합니다. 감시를 활성화한 상태에서 많은 파일 시스템 변경(컴파일, 설치 등)이 발생하면 시스템에 높은 부하가 걸릴 수 있습니다.</translation>
    </message>
    <message>
        <source>Index the entire file path</source>
        <translation>전체 파일 경로 색인</translation>
    </message>
    <message>
        <source>File browsers</source>
        <translation>파일 브라우저</translation>
    </message>
    <message>
        <source>Match case-sensitive</source>
        <translation>대소문자 구별</translation>
    </message>
    <message>
        <source>Show hidden files</source>
        <translation>숨김 파일 표시</translation>
    </message>
    <message>
        <source>Sort entries case-insensitve</source>
        <translation>대소문자 구별 없이 정렬</translation>
    </message>
    <message>
        <source>Show dirs first</source>
        <translation>디렉토리를 먼저 표시</translation>
    </message>
</context>
<context>
    <name>FileItem</name>
    <message>
        <source>Open with default application</source>
        <translation>기본 애플리케이션으로 열기</translation>
    </message>
    <message>
        <source>Execute</source>
        <translation>실행</translation>
    </message>
    <message>
        <source>Reveal in file browser</source>
        <translation>파일 브라우저에서 표시</translation>
    </message>
    <message>
        <source>Open terminal here</source>
        <translation>여기에서 터미널 열기</translation>
    </message>
    <message>
        <source>Copy file to clipboard</source>
        <translation>파일을 클립보드에 복사</translation>
    </message>
    <message>
        <source>Copy path to clipboard</source>
        <translation>경로를 클립보드에 복사</translation>
    </message>
</context>
<context>
    <name>FsIndexPath</name>
    <message numerus="yes">
        <source>Indexed %n directories in %1.</source>
        <translation>
            <numerusform>%1에서 %n개의 디렉토리를 색인했습니다.</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>HomeBrowser</name>
    <message>
        <source>Home browser</source>
        <translation>홈 디렉토리 브라우저</translation>
    </message>
    <message>
        <source>Browse home directory by path</source>
        <translation>경로로 홈 디렉토리 탐색</translation>
    </message>
</context>
<context>
    <name>MimeFilterDialog</name>
    <message>
        <source>MIME filters</source>
        <translation>MIME 필터</translation>
    </message>
    <message>
        <source>MIME filters are used while indexing to filter files by their MIME type. Files whose MIME type is not matched by any of the MIME filter patterns below are not indexed. The filter patterns support wildcard characters (*). Utilize the MIME types list on the left to find supported MIME types.</source>
        <translation>MIME 필터는 색인 중에 MIME 유형별로 파일을 필터링하는 데 사용됩니다. 아래의 MIME 필터 패턴과 일치하지 않는 MIME 유형의 파일은 색인되지 않습니다. 필터 패턴은 와일드카드 문자(*)를 지원합니다. 지원되는 MIME 유형을 찾으려면 왼쪽의 MIME 유형 목록을 활용하세요.</translation>
    </message>
    <message>
        <source>Available MIME types</source>
        <translation>사용 가능한 MIME 유형</translation>
    </message>
    <message>
        <source>Filter the available MIME types</source>
        <translation>사용 가능한 MIME 유형 필터링</translation>
    </message>
    <message>
        <source>MIME filter patterns</source>
        <translation>MIME 필터 패턴</translation>
    </message>
</context>
<context>
    <name>NameFilterDialog</name>
    <message>
        <source>Ignore patterns</source>
        <translation>제외 패턴</translation>
    </message>
    <message>
        <source>Ignore patterns are Perl-compatible regular expressions that can be utilized to exclude files from indexing. The filepath matched is relative to the root directory. Prepending &apos;!&apos; makes the pattern including. Filenames are matched in the order given by the filter list below.</source>
        <translation>제외 패턴은 파일을 색인에서 제외하는 데 사용할 수 있는 Perl 호환 정규 표현식입니다. 일치하는 파일 경로는 루트 디렉토리에서의 상대 경로입니다. &apos;!&apos;를 앞에 추가하면 패턴이 포괄적이 됩니다. 파일 이름은 아래 필터 목록에서 지정된 순서로 비교됩니다.</translation>
    </message>
</context>
<context>
    <name>Plugin</name>
    <message>
        <source>Update index</source>
        <translation>색인 업데이트</translation>
    </message>
    <message>
        <source>Update the file index</source>
        <translation>파일 색인 업데이트</translation>
    </message>
    <message>
        <source>Scan</source>
        <translation>스캔</translation>
    </message>
    <message>
        <source>Trash</source>
        <translation>휴지통</translation>
    </message>
    <message>
        <source>Your trash folder</source>
        <translation>휴지통 폴더</translation>
    </message>
    <message>
        <source>Open trash</source>
        <translation>휴지통 열기</translation>
    </message>
    <message>
        <source>Empty trash</source>
        <translation>휴지통 비우기</translation>
    </message>
</context>
<context>
    <name>RootBrowser</name>
    <message>
        <source>Root browser</source>
        <translation>루트 디렉토리 브라우저</translation>
    </message>
    <message>
        <source>Browse root directory by path</source>
        <translation>경로로 루트 디렉토리 탐색</translation>
    </message>
</context>
</TS>
