
from trame.app import get_server
from trame.decorators import TrameApp, change, controller
from trame.ui.vuetify3 import SinglePageLayout
from trame.widgets import vuetify3
from trame_aoc.widgets import trame_aoc as my_widgets


# ---------------------------------------------------------
# Engine class
# ---------------------------------------------------------

@TrameApp()
class MyTrameApp:
    def __init__(self, server=None):
        self.server = get_server(server, client_type="vue3")
        if self.server.hot_reload:
            self.server.controller.on_server_reload.add(self._build_ui)
        self.ui = self._build_ui()

        # Set state variable
        self.state.trame__title = "trame-aoc"
        self.state.resolution = 6

        # Example problems data
        self.state.problems = [
            {
                "day": 1,
                "title": "Calorie Counting",
                "description": "Help the elves count calories by analyzing the input.",
            },
            {
                "day": 2,
                "title": "Rock Paper Scissors",
                "description": "Simulate a tournament of Rock Paper Scissors.",
            },
            {
                "day": 3,
                "title": "Binary Diagnostic",
                "description": "Calculate power consumption using binary numbers.",
            },
        ]

    @property
    def state(self):
        return self.server.state

    @property
    def ctrl(self):
        return self.server.controller

    @controller.set("reset_resolution")
    def reset_resolution(self):
        self.state.resolution = 6

    @change("resolution")
    def on_resolution_change(self, resolution, **kwargs):
        print(f">>> ENGINE(a): Slider updating resolution to {resolution}")

    @controller.set("widget_click")
    def widget_click(self):
        print(">>> ENGINE(a): Widget Click")

    @controller.set("widget_change")
    def widget_change(self):
        print(">>> ENGINE(a): Widget Change")

    def _build_ui(self, *args, **kwargs):
        with SinglePageLayout(self.server) as layout:
            # Toolbar
            layout.title.set_text("Trame / vtk.js")
            with layout.toolbar:
                vuetify3.VSpacer()
                my_widgets.CustomWidget(
                    attribute_name="Hello",
                    py_attr_name="World",
                    click=self.ctrl.widget_click,
                    change=self.ctrl.widget_change,
                )
                vuetify3.VSpacer()
                vuetify3.VSlider(                    # Add slider
                    v_model=("resolution", 6),      # bind variable with an initial value of 6
                    min=3, max=60, step=1,          # slider range
                    dense=True, hide_details=True,  # presentation setup
                )
                with vuetify3.VBtn(icon=True, click=self.ctrl.reset_camera):
                    vuetify3.VIcon("mdi-crop-free")
                with vuetify3.VBtn(icon=True, click=self.reset_resolution):
                    vuetify3.VIcon("mdi-undo")

            # Main content
            with layout.content:
                with vuetify3.VCarousel():
                    for problem in self.state.problems:
                        with vuetify3.VCarouselItem():
                                with vuetify3.VCard():
                                    vuetify3.VCardTitle(f"Day {problem['day']}: {problem['title']}")
                                    vuetify3.VCardText(problem["description"])
            # Footer
            # layout.footer.hide()

            return layout
