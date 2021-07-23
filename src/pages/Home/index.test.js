import React from "react";
import Home from "./index";
import { render, waitFor, cleanup } from "@testing-library/react";
import { AppProvider } from "../../context";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);
describe("AppProvider & Home Page", () => {
  it("should render", () => {
    const { container } = render(
      <AppProvider>
        <Router>
          <Home />
        </Router>
      </AppProvider>
    );
    expect(container.firstChild).toBeTruthy();
  });

  it("show loading status while loading", () => {
    const { getByTestId } = render(
      <AppProvider>
        <Router>
          <Home />
        </Router>
      </AppProvider>
    );

    expect(getByTestId("home-header").textContent).toBe("Loading...");
  });

  it("show movie list after finished loading", async () => {
    const { getByTestId } = render(
      <AppProvider>
        <Router>
          <Home />
        </Router>
      </AppProvider>
    );

    await waitFor(
      () => {
        expect(getByTestId("home-header").textContent).toBe("Popular Movies");
      },
      { timeout: 5000 }
    );
  });
});
