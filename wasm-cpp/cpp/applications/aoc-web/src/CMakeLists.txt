cmake_minimum_required(VERSION 3.20)

# Specify project-specific source files
# Add source files
set(SOURCES
    WasmCallbacks.cxx
    WasmCallbackEmBinding.cxx
)

# Emscripten compile+link options
set(emscripten_link_options)
list(APPEND emscripten_link_options
  "-lembind"
  "--extern-post-js=${CMAKE_CURRENT_SOURCE_DIR}/post.js"
  "-sALLOW_MEMORY_GROWTH=1"
  "-sALLOW_TABLE_GROWTH=1"
  "-sEXPORT_NAME=aoc2024wasm"
  "-sENVIRONMENT=node,web"
  "-sMODULARIZE=1"
  "-sEXPORT_ES6=1"
  )


if (CMAKE_SIZEOF_VOID_P EQUAL "8")
list(APPEND emscripten_link_options
  "-sMAXIMUM_MEMORY=16GB")
else ()
list(APPEND emscripten_link_options
  "-sMAXIMUM_MEMORY=4GB")
endif ()


# Create executable
add_executable(aoc-2024-wasm ${SOURCES})

target_compile_features(aoc-2024-wasm PUBLIC
    cxx_std_23
)

target_link_libraries(aoc-2024-wasm
  PRIVATE
  aoc_y2024_core
)


target_compile_options(aoc-2024-wasm
PRIVATE
  ${emscripten_compile_options})

target_link_options(aoc-2024-wasm
  PRIVATE
    ${emscripten_link_options})

set_target_properties(aoc-2024-wasm
    PROPERTIES
    OUTPUT_NAME "aoc-2024-wasm"
    LINK_FLAGS "-s MODULARIZE=1 -s EXPORT_ES6=1 -s ALLOW_MEMORY_GROWTH=1"
    SUFFIX ".mjs")

install(FILES
    "$<TARGET_FILE_DIR:aoc-2024-wasm>/aoc-2024-wasm.wasm"
    DESTINATION ${CMAKE_INSTALL_BINDIR})
