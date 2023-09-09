import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import topLevelAwait from "vite-plugin-top-level-await";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    viteCompression(),
    topLevelAwait(),
    federation({
      name: "auth_app",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteAuthPage": "./src/pages/Remote",
      },
      // shared: ["react", "react-dom"],
      shared: ["react", "react-dom", "redux", "react-redux", "redux-saga", "redux-injectors", "redux-persist", "@reduxjs/toolkit"],
    }),
  ],
  build: {
    // target: "esnext",
    modulePreload: false,
    outDir: "auth-app-dist",
    cssCodeSplit: false,

    rollupOptions: {
      output: {
        minifyInternalExports: true,
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          redux: ["redux", "react-redux", "redux-saga", "redux-injectors", "redux-persist", "@reduxjs/toolkit"],
          // equilibrius: ["@equilibrius/ui", "@equilibrius/ui-standalone", "@equilibrius/web-components"],
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://echo-api-sigma.vercel.app",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
