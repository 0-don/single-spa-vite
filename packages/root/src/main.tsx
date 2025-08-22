import "import-map-overrides";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { getAppNames, registerApplication, start } from "single-spa";
import apps from "./apps";

// Preload dev servers from import map to fix HMR issues on first run
if (import.meta.env.DEV) {
  import("./importMap.dev.json")
    .then(({ default: { imports } }) => {
      const servers = [
        ...new Set(
          Object.values(imports)
            .filter((url) => url.includes("localhost"))
            .map((url) => new URL(url).origin)
        ),
      ];

      return Promise.race(
        servers.map(
          (server) => import(/* @vite-ignore */ `${server}/@react-refresh`)
        )
      );
    })
    .catch(() => {});
}

apps.forEach(({ name, activeWhen }) =>
  registerApplication({
    name,
    activeWhen,
    app: () => import(/* @vite-ignore */ name),
  })
);

if (import.meta.env.DEV) {
  console.log("APPLICATIONS", getAppNames());
  localStorage.setItem("imo-ui", "true");
} else {
  localStorage.setItem("imo-ui", "false");
}

start();

createRoot(document.getElementById("root")!).render(
  <StrictMode>{/* INSERT ANY COMPONENTS TO MOUNT HERE */}</StrictMode>
);
