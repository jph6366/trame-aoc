import { defineConfig } from 'vite';

export default defineConfig({
  base: "./",
  build: {
    lib: {
      entry: "./src/main.js",
      name: "trame_aoc_cpp",
      formats: ["umd"],
      fileName: "trame_aoc_cpp",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    outDir: "../trame_aoc/module/serve",
    assetsDir: ".",
    assetsInlineLimit: 80,
  },
});
