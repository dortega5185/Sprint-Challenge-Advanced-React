import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";

test("renders header", () => {
  const { getByText } = render(<App />);

  const linkElement = getByText("Loading...");
  expect(linkElement).toBeTruthy();
});
