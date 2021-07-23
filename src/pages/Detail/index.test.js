import React from "react";
import Detail from "./index";
import { render, cleanup, waitFor } from "@testing-library/react";
import { AppProvider } from "../../context";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);
describe("AppProvider & Details Page", () => {
  it("should render", () => {
    const { container } = render(
      <AppProvider>
        <Router>
          <Detail match={{ params: { id: 0 } }} />
        </Router>
      </AppProvider>
    );
    expect(container.firstChild).toBeTruthy();
  });

  it("show loading status", () => {
    const { getByTestId } = render(
      <AppProvider>
        <Router>
          <Detail match={{ params: { id: 0 } }} />
        </Router>
      </AppProvider>
    );

    expect(getByTestId("detail-loading-status").textContent).toBe(
      "Loading...  Click here to go home"
    );
  });
});
