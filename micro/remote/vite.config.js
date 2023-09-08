import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import topLevelAwait from "vite-plugin-top-level-await";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    topLevelAwait(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    outDir: "remote-app-dist",
    // modulePreload: false,
    // target: "esnext",
    // minify: false,
    cssCodeSplit: false,
  },
});
