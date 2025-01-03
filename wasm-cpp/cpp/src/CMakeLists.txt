cmake_minimum_required(VERSION 3.20)

include(FetchContent)
FetchContent_Declare(
    CompileTimeRegularExpressions
    GIT_REPOSITORY https://github.com/hanickadot/compile-time-regular-expressions.git
    GIT_TAG        v3.9.0
    )
FetchContent_MakeAvailable(CompileTimeRegularExpressions)

target_link_libraries(aoc_y2024_core PRIVATE
    ctre
)
set(AOC_Y2024_DAYS_LIST "01;02;03")
set(AOC_Y2024_DAYS_LIST ${AOC_Y2024_DAYS_LIST} PARENT_SCOPE)
set(AOC_Y2024_SOURCE_DIR ${CMAKE_CURRENT_SOURCE_DIR} PARENT_SCOPE)

target_sources(aoc_y2024_core  PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}/puzzle_factory.cpp
)

foreach(DAY ${AOC_Y2024_DAYS_LIST})
    target_sources(aoc_y2024_core PRIVATE
        ${CMAKE_CURRENT_SOURCE_DIR}/day${DAY}.cpp
    )
endforeach()