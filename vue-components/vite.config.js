export default {
  base: "./",
  build: {
    lib: {
      entry: "./src/main.js",
      name: "trame_aoc",
      formats: ["umd"],
      fileName: "trame_aoc",
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
  },
};
