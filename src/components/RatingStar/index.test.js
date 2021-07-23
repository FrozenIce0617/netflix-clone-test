import React from "react";
import RatingStar from "./index";
import { render } from "@testing-library/react";

describe("Rating Star", () => {
  it("should render", () => {
    const { container } = render(<RatingStar rating={7} vote_count={135} />);
    expect(container.firstChild).toBeTruthy();
  });

  it("render correct rating and vote count", () => {
    const { getByTestId } = render(<RatingStar rating={7} vote_count={135} />);
    const voteCountEl = getByTestId("vote-count");
    expect(voteCountEl.textContent).toBe("7 / 135");
  });
});
