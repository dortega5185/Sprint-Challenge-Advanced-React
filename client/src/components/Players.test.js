import React from "react";
import ReactDOM from "react-dom";
import Women from "./Women";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("Test if Country text is there", async () => {
  const { getByText } = await render(<Women />);
  const linkElement = getByText(/Country/i);
  expect(linkElement).toBeVisible();
});

it("Test if Searches text is there", async () => {
  const { getByText } = await render(<Women />);
  const linkElement = getByText(/Searches/i);
  expect(linkElement).toBeVisible();
});
