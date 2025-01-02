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
          const wasmCallbacks = new Module.WasmCallbacks();
          const day = idx + 1;
          const result = wasmCallbacks.hasImplementationForDay(day);
          console.log(`Day ${day} has implementation:`, result);
        });
      });
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
