import { inject, onBeforeMount, onMounted } from "vue";

export default {
  emits: ["change"],
  props: {
    days: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const everythingStyle =
      "display: flex; flex-flow: column; padding-left: 1em; padding-right: 1em; height: 100%;";
    const headingStyle =
      "font-weight: normal; color: #00cc00; text-shadow: 0 0 2px #00cc00, 0 0 5px #00cc00; text-decoration: none;";
    const selectStyle =
      "margin-top: 1em; margin-bottom: 1em; justify-content: center; align-items: stretch;";
    const olStyle =
      "margin-top: 1em; margin-bottom: 1em; justify-content: center; align-items: stretch;";
    const textareaStyle =
      "color: white; background: #10101a; border: 1px solid #333340; min-width: 100%; font-family: 'Courier New', Courier, monospace; min-height: 100%; margin-top: 1em; margin-bottom: 1em;";
    const fileInputStyle = "margin-top: 1em; margin-bottom: 1em;";
    const inputContainerStyle = "flex: 1;";

    const handleChange = () => {
      emit("change", this.selectedDay);
    };

    const handleFileDrop = (event) => {
      const file = event.dataTransfer.files[0];
      this.handleFile(file);
    };

    const handleFileSelect = (event) => {
      const file = event.target.files[0];
      this.handleFile(file);
    };

    const handleFile = (file) => {
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.puzzleInput = e.target.result;
        };
        reader.readAsText(file);
      }
    };

    onBeforeMount(() => {
      const trame = inject("trame");
      const wasmURL = trame.state.get("__trame_aoc_wasm");

      const wasm_script = document.createElement("script");
      wasm_script.src = wasmURL + `aoc-2024-wasm.js`; // Example if you're using an environment variable for the revision
      wasm_script.async = true;
      wasm_script.onload = () => {
        console.log("WASM script loaded successfully");
      };
      document.body.appendChild(wasm_script);
    });

    onMounted(() => {
      const trame = inject("trame");
      const wasmURL = trame.state.get("__trame_aoc_wasm");

      const script = document.createElement("script");
      script.src = wasmURL + `aoc.js`;
      script.async = true;
      document.body.appendChild(script);
    });

    return {
      everythingStyle,
      headingStyle,
      selectStyle,
      olStyle,
      textareaStyle,
      fileInputStyle,
      inputContainerStyle,
      handleChange,
      handleFileDrop,
      handleFileSelect,
      handleFile,
    };
  },
  template: `
        <div id="everything" :style="everythingStyle">
          <div>
            <h1 :style="headingStyle">Advent of Code 2024</h1>
            <select name="day" id="selectDay" v-model="selectedDay" @change="handleChange" :style="selectStyle">
              <option value="" disabled selected>Select a day</option>
              <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
            </select>
            <ol :style="olStyle">
              <li>
                <p id="viewResultPart1">{{ resultPart1 }}</p>
              </li>
              <li>
                <p id="viewResultPart2">{{ resultPart2 }}</p>
              </li>
            </ol>
            <p id="timingsOutput">{{ timings }}</p>
          </div>
          <div id="inputContainer" :style="inputContainerStyle">
            <textarea 
              id="puzzleInput" 
              placeholder="Paste your puzzle input or drag&amp;drop a file here&hellip;"
              v-model="puzzleInput"
              @dragover.prevent
              @drop="handleFileDrop"
              :style="textareaStyle">
            </textarea>
          </div>
          <input 
            type="file" 
            id="filePicker" 
            accept=".txt" 
            @change="handleFileSelect"
            :style="fileInputStyle"
          />
  </div>`,
};
