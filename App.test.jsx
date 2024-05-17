import { describe, expect, it } from "vitest";

import App from "./src/App";

import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />);

    const welcomeText = screen.getByText(/Quran App/i);

    screen.debug(welcomeText);

    expect(screen.getByText(/Quran App/i)).toBeInTheDocument();
  });

//   it("should increment count on click", async () => {
//     render(<App />);

//     userEvent.click(screen.getByRole("button"));

//     expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
//   });
});