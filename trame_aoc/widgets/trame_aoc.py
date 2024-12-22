from trame_client.widgets.core import AbstractElement
from .. import module


class HtmlElement(AbstractElement):
    def __init__(self, _elem_name, children=None, **kwargs):
        super().__init__(_elem_name, children, **kwargs)
        if self.server:
            self.server.enable_module(module)
            
__all__ = [
    "CustomWidget",
    "WasmWidget",
    "SolutionWidget",
]

# Expose your vue component(s)
class CustomWidget(HtmlElement):
    def __init__(self, **kwargs):
        super().__init__(
            "your-custom-widget",
            **kwargs,
        )
        self._attr_names += [
            "days"
        ]
        self._event_names += [
            "change",
        ]

# Expose your vue component(s)
class SolutionWidget(HtmlElement):
    def __init__(self, **kwargs):
        super().__init__(
            "your-solution-widget",
            **kwargs,
        )
        self._attr_names += [
            "day",
            "input",
        ]
        self._event_names += [
            "actionTriggered",
            "valueUpdated",
        ]

class WasmWidget(HtmlElement):
    def __init__(self, **kwargs):
        super().__init__(
            "your-wasm-widget",
            **kwargs,
        )
        self._attr_names += [
            "wasm_file_name",
            ("wasm_file_name", "image_src"),
        ],
        self._event_names += [
            "wasmLoaded",
            "imageProcessed",
        ]

