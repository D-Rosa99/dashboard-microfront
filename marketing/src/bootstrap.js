import React from "react";
import ReactDOM from "react-dom";

const mount = (element) => {
  ReactDOM.render(<h1>Hello World</h1>, element);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev_marketing");

  if (el) {
    mount(el);
  }
}

export default mount;
