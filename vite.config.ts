import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [react(), Pages()],
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
  },
  server: {
    port: 4006,
  },
  preview: {
    port: 4006,
  },
});
