import React from "react";
import IconStar from "./index";
import { render } from "@testing-library/react";

describe("Icon Star rendering", () => {
  it("should render", () => {
    const { container } = render(<IconStar />);
    expect(container.firstChild).toBeTruthy();
  });

  it("should render svg", () => {
    const { queryByTestId } = render(<IconStar />);
    expect(queryByTestId("icon-star")).toBeTruthy();
  });
});
