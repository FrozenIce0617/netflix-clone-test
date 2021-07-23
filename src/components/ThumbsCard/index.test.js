import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ThumbsCard from "./index";
import { render } from "@testing-library/react";
import { mock_movie } from "./../../context/mock_movie";

describe("Thumbs Card", () => {
  it("should render", () => {
    const { container } = render(
      <Router>
        <ThumbsCard movie={mock_movie} />
      </Router>
    );
    expect(container.firstChild).toBeTruthy();
  });

  it("should render thumbs card", () => {
    const { queryByTestId } = render(
      <Router>
        <ThumbsCard movie={mock_movie} />
      </Router>
    );
    expect(queryByTestId("thumbs-card")).toBeTruthy();
  });

  it("should render thumbs card title", () => {
    const { queryByTestId } = render(
      <Router>
        <ThumbsCard movie={mock_movie} />
      </Router>
    );
    expect(queryByTestId("thumbs-card-title")).toBeTruthy();
  });
});
