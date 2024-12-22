file(REMOVE_RECURSE
  "aoc-2024-wasm.js"
  "aoc-2024-wasm.pdb"
  "{CMAKE_CURRENT_BINARY_DIR}/library.js"
)

# Per-language clean rules from dependency scanning.
foreach(lang )
  include(CMakeFiles/aoc-2024-wasm.dir/cmake_clean_${lang}.cmake OPTIONAL)
endforeach()
