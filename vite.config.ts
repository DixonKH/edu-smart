import path from "path";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [react(), Pages(), visualizer({ open: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 3000, // Increase limit to 1.5 MB
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Group libraries into separate chunks
            if (id.includes("react")) return "react-vendors";
            if (id.includes("lodash")) return "lodash";
            if (id.includes("axios")) return "axios";
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    port: 4006,
  },
  preview: {
    port: 4006,
  },
});
