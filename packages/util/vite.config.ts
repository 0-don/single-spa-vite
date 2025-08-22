import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";

export default defineConfig(({}) => ({
  plugins: [
    react({ reactRefreshHost: "http://localhost:3000" }),
    vitePluginSingleSpa({
      type: "mife",
      serverPort: 3002,
      spaEntryPoints: "src/spa.tsx",
    }),
  ],
}));
