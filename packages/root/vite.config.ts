import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";

const PORT = 3000;

export default defineConfig({
  server: { port: PORT },
  preview: { port: PORT },
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: "root",
      imoUi: {
        variant: "full",
        buttonPos: "bottom-right",
      },
      importMaps: {
        dev: ["src/importMap.dev.json"],
        build: ["src/importMap.json"],
      },
    }),
  ],
});
