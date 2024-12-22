# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

cmake_minimum_required(VERSION ${CMAKE_VERSION}) # this file comes with cmake

# If CMAKE_DISABLE_SOURCE_CHANGES is set to true and the source directory is an
# existing directory in our source tree, calling file(MAKE_DIRECTORY) on it
# would cause a fatal error, even though it would be a no-op.
if(NOT EXISTS "/home/jphardee/Desktop/AdventOfCode/APP/trame-aoc/wasm-components/aoc-cpp/build/_deps/compiletimeregularexpressions-src")
  file(MAKE_DIRECTORY "/home/jphardee/Desktop/AdventOfCode/APP/trame-aoc/wasm-components/aoc-cpp/build/_deps/compiletimeregularexpressions-src")
endif()
file(MAKE_DIRECTORY
  "/home/jphardee/Desktop/AdventOfCode/APP/trame-aoc/wasm-components/aoc-cpp/build/_deps/compiletimeregularexpressions-build"
  "/home/jphardee/Desktop/AdventOfCode/APP/trame-aoc/wasm-components/aoc-cpp/build/_deps/compiletimeregularexpressions-subbuild/compiletimeregularexpressions-populate-prefix"
  "/home/jphardee/Desktop/AdventOfCode/APP/trame-aoc/wasm-components/aoc-cpp/build/_deps/compiletimeregularexpressions-subbuild/compiletimeregularexpressions-populate-prefix/tmp"
  "/home/jphardee/Desktop/AdventOfCode/APP/trame-aoc/wasm-components/aoc-cpp/build/_deps/compiletimeregularexpressions-subbuild/compiletimeregularexpressions-populate-prefix/src/compiletimeregularexpressions-populate-stamp"
  "/home/jphardee/Desktop/AdventOfCode/APP/trame-aoc/wasm-components/aoc-cpp/build/_deps/compiletimeregularexpressions-subbuild/compiletimeregularexpressions-populate-prefix/src"
  "/home/jphardee/Desktop/AdventOfCode/APP/trame-aoc/wasm-components/aoc-cpp/build/_deps/compiletimeregularexpressions-subbuild/compiletimeregularexpressions-populate-prefix/src/compiletimeregularexpressions-populate-stamp"
)

set(configSubDirs )
foreach(subDir IN LISTS configSubDirs)
    file(MAKE_DIRECTORY "/home/jphardee/Desktop/AdventOfCode/APP/trame-aoc/wasm-components/aoc-cpp/build/_deps/compiletimeregularexpressions-subbuild/compiletimeregularexpressions-populate-prefix/src/compiletimeregularexpressions-populate-stamp/${subDir}")
endforeach()
if(cfgdir)
  file(MAKE_DIRECTORY "/home/jphardee/Desktop/AdventOfCode/APP/trame-aoc/wasm-components/aoc-cpp/build/_deps/compiletimeregularexpressions-subbuild/compiletimeregularexpressions-populate-prefix/src/compiletimeregularexpressions-populate-stamp${cfgdir}") # cfgdir has leading slash
endif()
