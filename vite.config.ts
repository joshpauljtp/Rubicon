import react from "@vitejs/plugin-react";
import * as fs from "fs";
import path from "path";
import { defineConfig } from "vite";

// Custom middleware to serve wasm files with the correct MIME type
const wasmMiddleware = () => {
  return {
    name: "wasm-middleware",
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url.endsWith(".wasm")) {
          const wasmPath = path.join(
            __dirname,
            "node_modules/@rive-app/canvas/",
            path.basename(req.url)
          );
          const wasmFile = fs.readFileSync(wasmPath);
          res.setHeader("Content-Type", "application/wasm");
          res.end(wasmFile);
          return;
        }
        next();
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), wasmMiddleware()],
  assetsInclude: ["**/*.riv", "**/*.wasm"],
  esbuild: {
    supported: {
      "top-level-await": true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      supported: {
        "top-level-await": true,
      },
    },
  },
});
