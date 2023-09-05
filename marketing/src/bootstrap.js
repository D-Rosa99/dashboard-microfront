import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const mount = (element) => {
  ReactDOM.render(<App />, element);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev_marketing");

  if (el) {
    mount(el);
  }
}

export default mount;
