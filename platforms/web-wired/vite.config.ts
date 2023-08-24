import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.bitfinex.com/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/pub": {
        target: "https://api-pub.bitfinex.com/v2",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pub/, ""),
      },
    },
  },
});
