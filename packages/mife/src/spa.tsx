import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import { cssLifecycleFactory } from "vite-plugin-single-spa/ex";

const lc = singleSpaReact({
  React,
  ReactDOMClient,
  errorBoundary(err) {
    return <>{err}</>;
  },
  // rootComponent: App,
  async loadRootComponent() {
    const { default: App } = await import("./App");
    return App;
  },
});

// IMPORTANT:  Because the file is named spa.tsx, the string 'spa'
// must be passed to the call to cssLifecycleFactory.
const cssLc = cssLifecycleFactory("spa" /* optional factory options */);

export const bootstrap = [cssLc.bootstrap, lc.bootstrap];
export const mount = [cssLc.mount, lc.mount];
export const unmount = [cssLc.unmount, lc.unmount];
