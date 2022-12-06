import { fireEvent, render, screen } from "@testing-library/react";
import { Greeting } from "./Integration";

describe("<Greeting />", () => {
  it("shows correct greeting", () => {
    render(<Greeting />);
    const greeting = screen.getByTestId("greeting");
    const button = screen.getByTestId("show-greeting-button");

    expect(greeting.textContent).toBe("");
    fireEvent.click(button);
    expect(greeting.textContent).toBe("Hello human!");
  });
});
