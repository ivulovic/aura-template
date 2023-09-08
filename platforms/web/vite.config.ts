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
      name: "main-web-app",
      remotes: {
        // if real url is required we can deploy this app under the domain, and put dist in folder we are hosting our app.
        // remoteApp: "http://localhost:5001/remote-app-dist/assets/remoteEntry.js",
        remoteApp: "/remoteapp/assets/remoteEntry.js", // this can be done in prod and on nginx just set other root
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    // target: "esnext",
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
      "/remoteapp": {
        target: "http://localhost:5001/remote-app-dist",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/remoteapp/, ""),
      },
      "/remote-app-dist": {
        target: "http://localhost:5001",
        changeOrigin: true,
      },
    },
  },
});
