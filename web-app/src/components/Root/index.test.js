import * as React from "react";
import * as ReactDOM from "react-dom";
// components
import Root from "./index.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Root />, div);
});
