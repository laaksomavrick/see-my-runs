import React from "react";
import { render } from "@testing-library/react";
import { OnboardingPage } from "./OnboardingPage";
import { BrowserRouter as Router } from "react-router-dom";

const getOnboardingPage = () => (
  <Router>
    <OnboardingPage />
  </Router>
);

describe("OnboardingPage", () => {
  it("renders", () => {
    const { getByTestId } = render(getOnboardingPage());
    const page = getByTestId("onboardingPage");
    expect(page).toBeInTheDocument();
  });
});
