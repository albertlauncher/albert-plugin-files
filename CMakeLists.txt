cmake_minimum_required(VERSION 3.16)
project(files VERSION 11.11.0)

find_package(Albert REQUIRED)
find_package(QCoro6 REQUIRED COMPONENTS Coro)

albert_plugin(
    INCLUDE PRIVATE $<TARGET_PROPERTY:albert::applications,INTERFACE_INCLUDE_DIRECTORIES>
    QT Concurrent Widgets
    LINK PRIVATE QCoro6::Coro
)

if (BUILD_TESTS)
    find_package(Qt6 REQUIRED COMPONENTS Test)

    get_target_property(SRC_TST ${PROJECT_NAME} SOURCES)
    get_target_property(INC_TST ${PROJECT_NAME} INCLUDE_DIRECTORIES)
    get_target_property(LIBS_TST ${PROJECT_NAME} LINK_LIBRARIES)

    set(TARGET_TST ${PROJECT_NAME}_test)
    add_executable(${TARGET_TST} ${SRC_TST} test/test.cpp)
    target_include_directories(${TARGET_TST} PRIVATE ${INC_TST} test src)
    target_link_libraries(${TARGET_TST} PRIVATE ${LIBS_TST} Qt6::Test)
    set_target_properties(${TARGET_TST}
        PROPERTIES
            AUTOMOC ON
            AUTOUIC ON
            AUTORCC ON
    )
    set_property(TARGET ${TARGET_TST}
        APPEND PROPERTY AUTOMOC_MACRO_NAMES "ALBERT_PLUGIN")
    add_test(NAME ${TARGET_TST} COMMAND ${TARGET_TST})

endif()
