import { inject, onMounted } from "vue";

export default {
  emits: ["change"],
  setup() {
    const trame = inject("trame");

    onMounted(async () => {
      const LOADED_URLS = [];

      const loadScriptAsModule = (url) => {
        return new Promise(function (resolve, reject) {
          if (LOADED_URLS.indexOf(url) === -1) {
            LOADED_URLS.push(url);
            var newScriptTag = document.createElement("script");
            newScriptTag.type = "module";
            newScriptTag.src = url;
            newScriptTag.onload = resolve;
            newScriptTag.onerror = reject;
            document.body.appendChild(newScriptTag);
          } else {
            resolve(false);
          }
        });
      };

      const wasmBaseURL = trame.state.get("__trame_aoc_wasm");
      const jsModuleURL = `${wasmBaseURL}aoc-2024-wasm.mjs`;
      await loadScriptAsModule(jsModuleURL);

      trame.state.watch(["active_car"], async (idx) => {
        await window.AOC2024Wasm().then((Module) => {
          const day = idx + 1;
          const result = Module.hasImplementationForDay(day);
          if (result) {
            document.querySelector(
              "#wasm-solution"
            ).innerHTML = `Day ${day} has implementation`;
          } else {
            document.querySelector(
              "#wasm-solution"
            ).innerHTML = `Day ${day} not implemented yet`;
          }
        });
      });

      trame.refs["wasm-solution"] = {
        async init() {
          if (trame.state.get("puzzle_input")) {
            const reader = new FileReader();

            reader.onload = async function (event) {
              const fileContent = event.target.result;
              await window.AOC2024Wasm().then((Module) => {
                const day = trame.state.get("active_car") + 1;
                const result = Module.solvePuzzle(day, fileContent);
                document.querySelector("#wasm-solution").innerHTML = result;
              });
            };
            reader.readAsText(trame.state.get("puzzle_input"));
          } else {
            document.querySelector("#wasm-solution").innerHTML = `
            <p>\nyou forgot the file input ya cotton-headed ninny muggin!\n</p>
          `;
          }
        },
      };
    });
  },
  template: `
    <div>
        <pre id="wasm-solution">
          generate solution using C++ code
          leveraging Vue and Trame APIs
          also Emscripten and CMake
        </pre>
    </div>
    `,
};
