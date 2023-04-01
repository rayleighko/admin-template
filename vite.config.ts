import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    "process.env": process.env,
  },
  server: {
    port: 8000,
    open: true,
  },
  base: "./",
  esbuild: {
    keepNames: true,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    preserveSymlinks: true,
    alias: [
      // allow profiling in production
      { find: "react-dom", replacement: "react-dom/profiling" },
      {
        find: "scheduler/tracing",
        replacement: "scheduler/tracing-profiling",
      },
    ],
  },
})
