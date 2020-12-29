import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyRunsPage } from "./pages/MyRunsPage";
import { OnboardingPage } from "./pages/OnboardingPage";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/onboarding">
          <OnboardingPage />
        </Route>
        <Route path="*">
          <MyRunsPage />
        </Route>
      </Switch>
    </Router>
  );
};
