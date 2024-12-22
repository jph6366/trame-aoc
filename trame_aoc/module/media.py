from pathlib import Path


def register_media(serve_path):
    BASE_URL = f"__trame_aoc/assets/dog.png"
    dest_directory = Path(serve_path) / "assets" 

    return dict(
        # module_scripts=[f"{BASE_URL}/vtkWasmSceneManager.mjs"],
        state={"__trame_aoc_image": BASE_URL},
    )