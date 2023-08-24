import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsConfigPaths(), viteCompression()],
  build: {
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
