
from trame.app import get_server
from trame.decorators import TrameApp, change, controller
from trame.ui.vuetify3 import SinglePageLayout
from trame.widgets import vuetify3, html
from trame_aoc.widgets import trame_aoc as my_widgets
from trame_aoc.app import js_solutions, wasm_solutions
from trame_aoc.app.solutions.main_runner import main

# ---------------------------------------------------------
# Engine class
# ---------------------------------------------------------



@TrameApp()
class MyTrameApp:
    def __init__(self, server=None):
        self.server = get_server(server, client_type="vue3")
        if self.server.hot_reload:
            self.server.controller.on_server_reload.add(self._build_ui)


        # Set state variable
        self.state.trame__title = "trame-aoc"
        self.state.puzzle_input = ''
        self.state.solution_text = 'generate solution \n\nusing Python solutions modules'
        self.state.calendar_date = "2024-12-01"
        self.state.calendar_year = "2024"
        self.state.show_chip = 0
        self.state.show_lang = 0
        self.state.active_car = 0
        self.state.active_lang = 0
        self.state.star = [
            {
                "situation": ["This part involves finding the kth smallest value in a collection of values (kth order statistic)",
                            "This part involves tracking frequency of values in the collection of values",],
                "task": ["Sort the collection, then if the output of the sorting algorithm is an array, retrieve its kth element; otherwise, scan the sorted sequence to find the kth element.",
                       "Collect the frequency of values in an array of counters, use a hash function to assign each item to some counter,"],
                "action": ["binary min heap","count-min sketch"],
                "result": ["Selection from data in a binary (min) heap takes time O(k)","Unlike a hash table, count-min sketch uses only sub-linear space, at the expense of over-counting some events due to collisions"]
            }
        ]
        self.state.code = [
"""import heapq

class LocationAssortments:
    def __init__(self, rows, cols):
        self.selectionHeaps = [[],[]]
        
    def insertNotes(self):
        with open('input.txt', 'r') as file:
            for line in file.readlines():
                heapq.heappush(self.selectionHeaps[0], int(line.strip().split()[0]))
                heapq.heappush(self.selectionHeaps[1], int(line.strip().split()[1]))

    def computeMinPairDist(self):
        aNum = heapq.heappop(self.selectionHeaps[0])
        bNum = heapq.heappop(self.selectionHeaps[1])
        return abs(aNum - bNum)
            

class LocationComputer:

    def __init__(self, notes):
        self.total = 0
        self.notes = notes

    def findTotalDistances(self):
        self.total = 0
        while self.notes.selectionHeaps[0]:
            self.total+= self.notes.computeMinPairDist()
        return self.total
            
        
    

assortment1 = [3,4,2,1,3,3]
assortment2 = [4,3,5,3,9,3]

##locationAssortments.insertAssortments(assortment1,assortment2)
locationAssortments.insertNotes()

computer = LocationComputer(locationAssortments)
print(computer.findTotalDistances()) 
""",

    """from collections import defaultdict

def part2(puzzle_input):
    first = defaultdict(int)
    second = defaultdict(int)
    for line in puzzle_input.split('\n'):
        a, b = map(int, line.split())
        first[a] += 1
        second[b] += 1

    similarity = 0
    for num, count in first.items():
        similarity += num * count * second[num]

    return similarity"""
        ]
        self.state.advent = [
            "          .-----.          .------------------.    ",
            "       .--'     |        .-'                  '-.  ",
            "    .--'        |        |                      |  ",
            ".---'           |        |                      |  ",
            "|               |        |                      |  ",
            "|               |        |          ..          |  ",
            "|               |        |        .'  '.        |  ",
            "|               |        |        |    |        |  ",
            "|   .--.        |        |        |    |        |  ",
            "'---'  |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",


        ]
        self.state.advent_completed = [
            "          .-----.          .------------------.    ",
            "       .--'~ ~ ~|        .-' *       \  /     '-.  ",
            "    .--'~  .* ~ |        |  >o<   \_\_\|_/__/   |  ",
            ".---': ~ '(~), ~|        | >@>O< o-_/.()__------|  ",
            "|               |        |                      |  ",
            "|               |        |          ..          |  ",
            "|               |        |        .'  '.        |  ",
            "|               |        |        |    |        |  ",
            "|   .--.        |        |        |    |        |  ",
            "'---'  |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
            "       |        |        |        |    |        |  ",
        ]
        self.state.problems = [
            {
                "day": 1,
                "title": "Historian Hysteria",
                "description": "Help find the Chief Historian!",
            },
            {
                "day": 2,
                "title": "Red-Nose Reports",
                "description": "The Red-Nosed react safety systems have unusual reports",
            },
            {
                "day": 3,
                "title": "Mull It Over",
                "description": "Repair the shopkeeper's corrupt computer",
            },
                        {
                "day": 4,
                "title": "Ceres Search",
                "description": "Help the elf on Ceres Station solve their word search",
            },
            {
                "day": 5,
                "title": "Print Queue",
                "description": "Help update the sleigh launch safety manuals!",
            },
            {
                "day": 6,
                "title": "Guard Gallivant",
                "description": "Determine the Guard's patrol route so the historians can search safely!",
            },
            {
                "day": 7,
                "title": "Bridge Repair",
                "description": "Assist in calculating the final calibrations to repair the rope bridge",
            },
            {
                "day": 8,
                "title": "Resonant Collinearity",
                "description": "Create a map of the top-secret Easter Bunny antennas",
            },
            {
                "day": 9,
                "title": "Disk Fragmenter",
                "description": "Help the amphipod make more contiguous free space on his computer",
            },
            {
                "day": 10,
                "title": "Hoof It",
                "description": "The Lava Island Hiking Guide has been scorched by Lava, help fill in the missing bits!",
            },
            {
                "day": 11,
                "title": "Plutonian Pebbles",
                "description": "You've come across one of the mazes of the long-lost Pluto civilization, decipher the code in the stones"
            },
            {
                "day": 12,
                "title": "Garden Groups",
                "description": "You settle near the gardener's farm and want to figure out how much fence they need"
            },
            {
                "day": 13,
                "title": "Claw Contraption",
                "description": "The tropical island resort has a new arcade! Try out the new claw machines"
            },
            {
                "day": 14,
                "title": "Restroom Redoubt",
                "description": "You are teleported to the Easter Bunny HQ bathrooms for a quick leak, but they've upped security!"
            },
            {
                "day": 15,
                "title": "Warehouse Woes",
                "description": "You are teleported back to the mini submarine, help the lanternfish out!"
            },
            {
                "day": 16,
                "title": "Reindeer Maze",
                "description": "It is time for the Reindeer Olympics and the big event is the Reindeer Maze"
            },
            {
                "day": 17,
                "title": "Chronospatial Computer",
                "description": "the small handheld device unfolds into a 3-bit computer, debug the program"
            },
        ]
        
        self.ui = self._build_ui()


    @property
    def state(self):
        return self.server.state

    @property
    def ctrl(self):
        return self.server.controller

    @controller.set("set_code1")
    def set_code1(self):
        if(self.state.show_chip and self.state.show_chip != 2): self.state.show_chip = 0
        else: self.state.show_chip = 1
    
    @controller.set("set_code2")
    def set_code2(self):
        if(self.state.show_chip and self.state.show_chip != 1): self.state.show_chip = 0
        else: self.state.show_chip = 2

    @controller.set("set_lang0")
    def set_lang0(self):
        if(self.state.show_lang and self.state.show_lang != 1 and self.state.show_lang != 2): self.state.show_lang = 0
        else: self.state.show_lang = 0
    
    @controller.set("set_lang1")
    def set_lang1(self):
        if(self.state.show_lang and self.state.show_lang != 2 and self.state.show_lang != 0): self.state.show_lang = 0
        else: self.state.show_lang = 1

    @controller.set("set_lang2")
    def set_lang2(self):
        if(self.state.show_lang and self.state.show_lang != 1 and self.state.show_lang != 0): self.state.show_lang = 0
        else: self.state.show_lang = 2
 
    @controller.set("compute_solution")
    def compute_solution(self):
        """
        This method computes a solution using the custom classes.
        """

        if (self.state.active_lang == 0):
            if not self.state.puzzle_input:
                self.state.solution_text = 'you forgot the file input ya cotton-headed ninny muggin!'
            else:
                self.state.solution_text = 'solution otw'
                text_solution = main(self.state.puzzle_input, self.state.active_car+1)
                # Update the state with the computed solution
                self.state.solution_text = text_solution
        elif (self.state.active_lang == 2):
            js_solutions.SolutionsComponent(self.server).init_solution()
            # js_solutions.SolutionsComponent(self.server).get_ui()
        elif (self.state.active_lang == 1):
            wasm_solutions.WasmSolutionsComponent(self.server).init_solution()
            # wasm_solutions.WasmSolutionsComponent(self.server).get_ui()
    
    @controller.set("widget_change")
    def widget_change(self):
        print(">>> WASM ENGINE(a): Widget Change")



    def _build_ui(self, *args, **kwargs):

        with SinglePageLayout(self.server, style="background-color: #04023b;") as layout:
            # Toolbar
            layout.toolbar.hide()
            # layout.title.set_text("🎄 Trame Advent of Code 🎁")
            # with layout.toolbar:
            #     vuetify3.VSlider(                    # Add slider
            #         v_model=("resolution", 6),      # bind variable with an initial value of 6
            #         min=3, max=60, step=1,          # slider range
            #         dense=True, hide_details=True,  # presentation setup
            #     )
            # Main content
            with layout.content:
                html.H1("🎄🎁🎄🎁🎄Advent Of Code🎄🎁🎄🎁🎄", style="text-align:center; color:#fff; font-family:Georgia, serif")
                html.H3("var y="+self.state.calendar_year, style="margin-left:-8dvw; text-align:center; color:#2c2f6d; font-family:Georgia, serif")
                with vuetify3.VContainer(fluid=False):

                    with vuetify3.VCarousel(v_model=("active_car", 0),
                        hide_delimiter_background=False, delimiter_icon="mdi-creation",show_arrows=False, 
                        vertical_delimiters='left',direction="vertical", style="height:60dvh"):
                        for problem in self.state.problems:
                            with vuetify3.VCarouselItem(style="height:100%;"):
                                    with vuetify3.VCard(style="background-color:#0e0f23; color: #fff; height:100%;"):
                                        for idx in range(len(self.state.advent)):
                                            if idx == problem['day']:
                                                html.Pre(self.state.advent_completed[problem['day']], style="text-align:center;")
                                            else:
                                                html.Pre(self.state.advent[idx], style="color: black; text-align:center;")
                                        with html.A(href=f"https://adventofcode.com/2024/day/{problem['day']}"):
                                            vuetify3.VCardTitle(f"Day {problem['day']}: {problem['title']}", style="text-align:center;")
                                            vuetify3.VCardText(problem["description"], style="text-align:center;")
                                        

                    vuetify3.VTabs(
                        v_model=("active_tab", 0),  # Bind to active tab index
                        density="compact",  # Compact styling
                        style="border-radius: 8px; background: #008000; color: white;font-family:Georgia, serif;",  # Custom tab styling
                        children=[
                            vuetify3.VTab(style="color:#030338;",v_for="(item, i) in ['Puzzle Input', 'Source Code', 'Description']", key="i", children="{{ item }}"),  # Tab labels
                        ],
                    )


                    with vuetify3.VContainer(v_show=("active_tab==0"),  style="width:auto; background-color: #FFEB3B; padding: 10px; border-radius: 8px;"):
                        with html.Div(style="display:flex;"):
                            html.H1("Day")
                            html.Pre(" ")
                            html.H1(v_text=("problems[active_car]['day']"))
                            with html.Div(style="text-align:center; font-family:Arial;"):
                                # Leaves
                                with html.Div(style="position:relative; display:inline-block; margin-top:-40px;"):
                                    html.Div(style="width:20px; height:10px; background-color:green; border-radius:20px 20px 0 20px; transform:rotate(-30deg); position:absolute; top:0; left:-15px;")
                                    html.Div(style="width:20px; height:10px; background-color:green; border-radius:20px 20px 20px 0; transform:rotate(30deg); position:absolute; top:0; left:15px;")
                                
                                # Berries
                                with html.Div(style="position:relative; margin-left:15px;"):
                                    html.Span(style="display:inline-block; width:6px; height:6px; background-color:red; border-radius:50%; position:absolute; top:0; left:-7px;")
                                    html.Span(style="display:inline-block; width:6px; height:6px; background-color:red; border-radius:50%; position:absolute; top:0; left:3px;")
                                    html.Span(style="display:inline-block; width:6px; height:6px; background-color:red; border-radius:50%; position:absolute; top:7px; left:-2px;")

                            html.H3(v_text=("problems[active_car]['title']"))
                        vuetify3.VFileInput(v_model=("puzzle_input", ''), show_size=True, )
                        with html.Ul():
                            with html.Li(style="display:block; justify-content: space-evenly; width:100%;"):      
                                with vuetify3.VBtn(icon=True, style="background-color:#008000", click=self.compute_solution):
                                    vuetify3.VIcon("mdi-creation", size="36px", color="#f7d826")
                                with vuetify3.VTabs(
                                    v_model=("active_lang", 0),  # Bind to active tab index
                                    style=" border-radius: 8px; color:#008000;"
                                    ):
                                    vuetify3.VTab( style="margin-left: 8dvw; color:white;", v_for="(item, i) in ['python', 'cpp', 'javascript']", 
                                        key="i", children=[
                                            vuetify3.VIcon("mdi-language-{{item}}",size='36px', style="color:#008000;")
                                                            ],
                                        )
                            with html.Li(style="display:flex; justify-content: space-evenly; width:100%;"):
                                with html.Div():
                                    html.Pre('\n')
                                    html.Pre(v_show=("active_lang==0"),v_text=("solution_text"))
                                    html.Pre('\n',v_show=("active_lang==0"))
                                    wasm_solutions.WasmSolutionsComponent(self.server).get_ui()
                                    js_solutions.SolutionsComponent(self.server).get_ui()

                    with vuetify3.VContainer(v_model=("show_chip", 0), v_show=("active_tab==1"), style="font-family:Georgia, serif;width:auto;background-color:#008000; padding: 10px; border-radius: 8px;"):
                        vuetify3.VChip("Part 1", draggable=True, click=self.set_code1,  style="background-color: #a22334; color: white; font-size: 1em;")
                        vuetify3.VChip("Part 2", draggable=True,  click=self.set_code2, style="background-color: #f90b0b; color: #FFEB3B; font-size: 1em;")
                        with html.Ul(v_show=("show_chip==1")):
                            with html.Li():
                                with vuetify3.VChip(click=self.set_lang0):
                                    vuetify3.VIcon("mdi-language-python", color="white", size="2dvw")
                                with vuetify3.VChip(click=self.set_lang1):
                                    vuetify3.VIcon("mdi-language-c", color="white", size="2dvw")
                                    vuetify3.VIcon("mdi-language-cpp", color="white", size="2dvw")
                                with vuetify3.VChip(click=self.set_lang2):
                                    vuetify3.VIcon("mdi-language-javascript", color="white", size="2dvw")
                                    vuetify3.VIcon("mdi-language-typescript", color="white", size="2dvw")
                                html.Pre('\n'+self.state.code[0]+'\n', v_show=("show_lang==0"), style="color: #FFEB3B;background-color:#a22334; border-radius:1dvw;font-family:Courier New;")
                                html.Pre('\n'+"insert c/cpp"+'\n', v_show=("show_lang==1"), style="color: #FFEB3B;background-color:#a22334; border-radius:1dvw;font-family:Courier New;")
                                html.Pre('\n'+"insert ts/js"+'\n', v_show=("show_lang==2"), style="color: #FFEB3B;background-color:#a22334; border-radius:1dvw;font-family:Courier New;")
                        html.Pre('\n'+self.state.code[1]+'\n', v_show=("show_chip==2"),  style="color: #FFEB3B;background-color:#d4191b; border-radius:1dvw;font-family:Courier New;")

                    with vuetify3.VContainer(v_show=("active_tab==2"), style="font-family:Georgia, serif; width:auto;background-color: #f90b0b; padding: 10px; border-radius: 8px;"):
                        for text in self.state.star:
                            with html.Div(style="color: #fff;"):
                                html.H2(text['situation'][0])
                                html.H2(text['situation'][1], style="color:#f7d826;")
                                html.H2(text['task'][0])
                                html.H2(text['task'][1], style="color:#f7d826;")
                                html.H2("1. "+text['action'][0], )
                                html.H2("2. "+text['action'][1], style="color:#f7d826;")
                                html.H2(text['result'][0])
                                html.H2(text['result'][1], style="color:#f7d826;")

            # Footer
            with layout.footer:
                
                with vuetify3.VBottomNavigation(style=" background: #008000; color: white;"):
                    with html.Div(style="display:flex; flex-wrap:wrap; justify-content: space-evenly; align-items: center; width: 100%;"):
                        vuetify3.VIcon("mdi-bell", size="36px", color="white")
                        vuetify3.VIcon("mdi-snowflake", color="white", size="48px")
                        vuetify3.VIcon("mdi-snowflake", color="white", size="48px")
                        vuetify3.VIcon("mdi-gift", size="36px", color="white")
                        with vuetify3.VBtn(icon=True, ):
                            vuetify3.VIcon("mdi-linkedin", size="36px", color="white")
                        vuetify3.VIcon("mdi-candycane", size="36px", color="white")
                        vuetify3.VIcon("mdi-gift", size="36px", color="white")
                        vuetify3.VIcon("mdi-snowflake", color="white", size="48px")
                        vuetify3.VIcon("mdi-snowflake", color="white", size="48px")
                        vuetify3.VIcon("mdi-gift", size="36px", color="white")
                        vuetify3.VIcon("mdi-candycane", size="36px", color="white")
                        with vuetify3.VBtn(icon=True, ):
                            vuetify3.VIcon("mdi-github", size="36px", color="white")
                        vuetify3.VIcon("mdi-gift", size="36px", color="white")
                        vuetify3.VIcon("mdi-snowflake", color="white", size="48px")
                        vuetify3.VIcon("mdi-snowflake", color="white", size="48px")
                        vuetify3.VIcon("mdi-bell", size="36px", color="white")
                    vuetify3.VSpacer()
                    vuetify3.VSpacer()
                    vuetify3.VSpacer()
            return layout
