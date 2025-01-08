from trame.app import get_server
from trame_aoc.widgets import trame_aoc
from trame.widgets import html, client
from trame.decorators import change, controller
import asyncio

class WasmSolutionsComponent:
    def __init__(self, server):
        self.server = get_server(server, client_type="vue3")

    @property
    def state(self):
        return self.server.state

    @property
    def ctrl(self):
        return self.server.controller


    @controller.set("widget_change")
    def widget_change(self):
        print(">>> ENGINE(a): Widget widget_change")

    
    def init_solution(self):
        self.server.js_call("wasm-solution", "init")

    
    @controller.set("get_ui")
    def get_ui(self):
            self.init_solution()
            return trame_aoc.CustomWidget(v_show=("active_lang==1"),
                                        change=self.widget_change)
