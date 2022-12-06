import { render, screen } from "@testing-library/react";
import List from "./list";

describe("List Compnent", () => {
  it("Show followers list", async () => {
    render(<List />);
    const list = await screen.findByTestId("follower-item-0");
    expect(list).toBeInTheDocument();
  });
  it("Show followers list all", async () => {
    render(<List />);
    const list = await screen.findAllByTestId(/follower-item/i);
    expect(list.length).toBe(5);
  });
});
