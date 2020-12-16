import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

// function bootstrap(props) {
//   const {
//     name,        // The name of the application
//     singleSpa,   // The singleSpa instance
//     mountParcel, // Function for manually mounting
//     customProps  // Additional custom information
//   } = props;     // Props are given to every lifecycle
//   return Promise.resolve();
// }
