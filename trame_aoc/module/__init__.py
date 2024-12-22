from pathlib import Path

from trame_aoc.module.media import register_media
from trame_aoc.module.wasm import register_wasm

# Compute local path to serve
serve_path = str(Path(__file__).with_name("serve").resolve())

# Serve directory for JS/CSS files
serve = {"__trame_aoc": serve_path}

# List of JS files to load (usually from the serve path above)
scripts = [
                "__trame_aoc/trame_aoc.umd.js",
]

# List of CSS files to load (usually from the serve path above)
# styles = ["__trame_aoc/style.css"]

# List of Vue plugins to install/load
vue_use = ["trame_aoc"]

# Uncomment to add entries to the shared state
# state = {}


# Optional if you want to execute custom initialization at module load
def setup(app, **kwargs):
    """Method called at initialization with possibly some custom keyword arguments"""
    app.enable_module(register_wasm(serve_path))
    app.enable_module(register_media(serve_path))
