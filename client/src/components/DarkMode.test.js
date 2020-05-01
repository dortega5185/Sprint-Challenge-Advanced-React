import React from "react";
import ReactDOM from "react-dom";
import DarkMode from "./DarkMode";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DarkMode />, div);
  ReactDOM.unmountComponentAtNode(div);
});
