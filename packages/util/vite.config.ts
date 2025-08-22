import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import externalize from "vite-plugin-externalize-dependencies";
import vitePluginSingleSpa from "vite-plugin-single-spa";

const PORT = 3002;
const APPLICATION_EXTERNALS: string[] = [];
const NPM_EXTERNALS: string[] = [];

export default defineConfig(() => ({
  plugins: [
    react({ reactRefreshHost: "http://localhost:3000" }),
    vitePluginSingleSpa({
      type: "mife",
      serverPort: PORT,
      spaEntryPoints: "src/spa.tsx",
    }),
    externalize({ externals: APPLICATION_EXTERNALS }),
  ],
  build: {
    rollupOptions: { external: [...APPLICATION_EXTERNALS, ...NPM_EXTERNALS] },
  },
}));
