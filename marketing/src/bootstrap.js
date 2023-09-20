import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

const mount = (element, { onNavigate, defaultHistory, initialPath }) => {
  const memoryHistory =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    memoryHistory.listen(onNavigate);
  }

  ReactDOM.render(<App history={memoryHistory} />, element);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = memoryHistory.location;

      if (pathname !== nextPathname) {
        memoryHistory.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev_marketing");

  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export default mount;
