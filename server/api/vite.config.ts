import path from "node:path";

import { defineConfig, loadEnv } from "vite";
import dts from "vite-plugin-dts";
import { VitePluginNode } from "vite-plugin-node";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      dts({
        insertTypesEntry: true,
      }),
      ...VitePluginNode({
        adapter: "express",
        appPath: "./src/index.ts",
        exportName: "EquilibriusAPI",
        tsCompiler: "esbuild",
        swcOptions: {},
      }),
    ],
    build: {
      sourcemap: true,
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "EquilibriusAPI",
        formats: ["es", "umd"],
        fileName: (format) => `index.${format}.js`,
      },
    },
  });
};
