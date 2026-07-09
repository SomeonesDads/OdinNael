import path from "node:path";

export default {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
};