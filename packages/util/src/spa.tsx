import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import { cssLifecycleFactory } from "vite-plugin-single-spa/ex";

const lc = singleSpaReact({
  React,
  ReactDOMClient,
  errorBoundary(err) {
    return <div>Error: {JSON.stringify(err)}</div>;
  },
  rootComponent: () => null,
});

const cssLc = cssLifecycleFactory("spa");

export const bootstrap = [cssLc.bootstrap, lc.bootstrap];
export const mount = [cssLc.mount, lc.mount];
export const unmount = [cssLc.unmount, lc.unmount];

export { DummyComponent, title } from "./utils";
