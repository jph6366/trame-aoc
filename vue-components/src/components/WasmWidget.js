import {inject, onMounted, ref} from 'vue'

export default {
  emits: ["wasmLoaded", "imageProcessed"],
  props: {
    wasm_file_name: {
      type: String,
      required: true,
    },
    image_src: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const trame = inject("trame");
    const wasmURL = trame.state.get("__trame_aoc_wasm");
    const canvas = ref(null);
    const memory = new WebAssembly.Memory({ initial: 100, maximum: 1000 });
    const heap = new Uint8Array(memory.buffer);
    let wasm = null;
    let imageProcMode = 0;
    const blurCount = ref(0);

    const loadWasm = async () => {
      try {
        const response = await fetch(wasmURL);
        const wasmSource = await response.arrayBuffer();
        const wasmModule = new WebAssembly.Module(wasmSource);
        const imports = {
          env: {
            console_log: (arg) => console.log(arg),
            memory,
          },
        };
        const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
        wasm = wasmInstance.exports;
        emit("wasmLoaded");
      } catch (error) {
        console.error("Failed to load WebAssembly module:", error);
      }
    };

    const loadImage = () => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = trame.state.get("__trame_aoc_image");
      img.onload = () => {
        const ctx = canvas.value.getContext("2d");
        ctx.drawImage(img, 0, 0);
        emit("imageProcessed", { width: img.width, height: img.height });
      };
    };

    const copyTopImageToHeap = () => {
      const ctx = canvas.value.getContext("2d");
      const imageData = ctx.getImageData(0, 0, canvas.value.width, canvas.value.height);
      for (let i = 0; i < imageData.data.length; i++) {
        heap[i] = imageData.data[i];
      }
    };

    const copyHeapToBottomImage = () => {
      const ctx = canvas.value.getContext("2d");
      const imageData = ctx.getImageData(0, 0, canvas.value.width, canvas.value.height);
      for (let i = 0; i < imageData.data.length; i++) {
        imageData.data[i] = heap[i];
      }
      ctx.putImageData(imageData, 0, canvas.value.height / 2);
    };

    const processImage = () => {
      copyTopImageToHeap();
      wasm.swap_red(canvas.value.width, canvas.value.height, imageProcMode);
      imageProcMode++;
      copyHeapToBottomImage();
      emit("imageProcessed", {
        width: canvas.value.width,
        height: canvas.value.height,
      });
    };

    const blurImage = () => {
      wasm.blur(canvas.value.width, canvas.value.height);
      copyHeapToBottomImage();
      blurCount.value++;
      if (blurCount.value < 60) {
        setTimeout(blurImage, 10);
      } else {
        setTimeout(processImage, 100);
      }
    };

    onMounted(() => {
      loadWasm();
      loadImage();
    });

    return {
      canvas,
      processImage,
      blurImage,
    };
  },
  template: `
    <div>
      <canvas ref="canvas" width="800" height="800"></canvas>
      <v-btn @click="processImage">Process Image</v-btn>
      <v-btn @click="blurImage">Blur Image</v-btn>
    </div>
  `,
};
