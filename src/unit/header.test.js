import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  it("should render same text", async () => {
    render(<Header title="title" />);
    const h1Element = await screen.findByText(/hello/i);
    expect(h1Element).toBeInTheDocument();
  });

  it("should render same text 2", () => {
    render(<Header title="title" />);
    const h1Element = screen.queryByText(/bye/i);
    expect(h1Element).not.toBeInTheDocument();
  });

  // it("should render same text 3", () => {
  //   render(<Header title="title" />);
  //   const h1Elements = screen.getAllByText(/hello/i);
  //   expect(h1Elements.length).toBe(2);
  // });
});
