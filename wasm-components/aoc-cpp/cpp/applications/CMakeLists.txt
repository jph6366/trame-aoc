cmake_minimum_required(VERSION 3.20)

add_subdirectory(aoc_cli)
if(EMSCRIPTEN)
  add_subdirectory(aoc-web)
endif()
