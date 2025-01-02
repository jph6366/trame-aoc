from pathlib import Path


def register_wasm(serve_path):
    BASE_DIR = f"__trame_aoc/wasm/"
    dest_directory = Path(serve_path) / "wasm" 

    return dict(
        # module_scripts=[f"{BASE_URL}/vtkWasmSceneManager.mjs"],
        state={"__trame_aoc_wasm": BASE_DIR },
    )