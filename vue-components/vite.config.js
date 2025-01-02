export default {
  base: "./",
  build: {
    target: 'es2022',
    lib: {
      entry: "./src/main.js",
      name: "trame_aoc",
      formats: ["umd"],
      fileName: "trame_aoc",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        format: "system",
        globals: {
          vue: "Vue",
        },
      },
    },
    outDir: "../trame_aoc/module/serve",
    assetsDir: ".",
  },
  worker: {
    format: "es",
  },
  define: {
    'process.env': {}, // Polyfill process if needed
  },
};
