import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/onboarding">
          <div>Onboarding</div>
        </Route>
        <Route path="*">
          <div>Hello, world</div>
        </Route>
      </Switch>
    </Router>
  );
};
