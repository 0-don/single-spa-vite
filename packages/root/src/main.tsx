import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { getAppNames, registerApplication, start } from "single-spa";
import apps from "./apps";

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
