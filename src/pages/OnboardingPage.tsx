import { Box } from "@chakra-ui/react";
import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

export const OnboardingPage: React.FC = () => {
  let { path } = useRouteMatch();
  const safePath = path === "/" ? null : path;

  return (
    <Box data-testid="onboardingPage">
      <Switch>
        <Route path={`${safePath}/name`}>
          <div>Enter a name</div>
        </Route>
        <Route path={`${safePath}/location`}>
          <div>Enter a location</div>
        </Route>
        <Route path="*">
          <Redirect to={`${safePath}/name`} />
        </Route>
      </Switch>
    </Box>
  );
};
