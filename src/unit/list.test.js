import { render, screen } from "@testing-library/react";
import List from "./list";

describe("List Compnent", () => {
  it("Show followers list", async () => {
    render(<List />);
    const list = await screen.findByTestId("follower-item-0");
    expect(list).toBeInTheDocument();
  });
});
