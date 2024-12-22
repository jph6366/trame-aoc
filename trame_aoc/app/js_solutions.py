from trame.app import get_server
from trame_aoc.widgets import trame_aoc
from trame.widgets import html, client
from trame.decorators import change, controller

class SolutionsComponent:
    def __init__(self, server):
        self.server = get_server(server, client_type="vue3")

    @property
    def state(self):
        return self.server.state

    @property
    def ctrl(self):
        return self.server.controller

    @controller.set("widget_action")
    def widget_action(self):
        print(">>> ENGINE(a): Widget Action")

    @controller.set("widget_updated")
    def widget_updated(self):
        print(">>> ENGINE(a): Widget Updated")
        print(self.state.js_solution_text)

    def init_solution(self):
         self.server.js_call("solution", "init")
    
    @controller.set("get_ui")
    def get_ui(self):
            return trame_aoc.SolutionWidget(
                        v_show=("active_lang==2"),                       
                        day=self.state.active_car,
                        input=self.state.puzzle_input,
                        actionTriggered=self.widget_action,
                        valueUpdated=self.widget_updated
                    )
