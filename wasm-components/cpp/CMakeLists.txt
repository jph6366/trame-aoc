cmake_minimum_required(VERSION 3.20)
project(TRAME_ADVENT_OF_CODE)

# Set C++ standard and threading flags
set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Check for Emscripten environment
if("${CMAKE_CXX_COMPILER_ID}" STREQUAL "Emscripten")
    set(CMAKE_EXECUTABLE_SUFFIX ".wasm")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -pthread -std=c++23")
    set(CMAKE_CXX_FLAGS_RELEASE "-O3")
else()
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -pthread -std=c++23 -static-libstdc++")
    if(${CMAKE_BUILD_TYPE} STREQUAL "Release")
        set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -O3")
    endif()
endif()

# Locate source files
file(GLOB_RECURSE SOURCE_FILES src/**)

# Add executable target
add_executable(TRAME_ADVENT_OF_CODE ${SOURCE_FILES})

if("${CMAKE_CXX_COMPILER_ID}" STREQUAL "Emscripten")
    # Add Emscripten-specific linker flags
    target_link_options(TRAME_ADVENT_OF_CODE PRIVATE
        "-s WASM=1"                              # Enable WebAssembly output
        "-s EXPORTED_FUNCTIONS=['_main']" # Exported functions
        "-s EXPORTED_RUNTIME_METHODS=['ccall','cwrap']"                    # Runtime methods for JS
        "-s EXIT_RUNTIME=1"                       # Exit runtime after execution
        "-s ALLOW_MEMORY_GROWTH=1"                # Allow dynamic memory growth
        "-s NO_EXIT_RUNTIME=1" # Don't include the default exit runtime function
        "--bind"                                  # Enable Embind support
    )
endif()
