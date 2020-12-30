import { Box, useControllableState } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { OnboardingEnterNamePage } from "./OnboardingEnterNamePage";

export const OnboardingPage: React.FC = () => {
  let { path } = useRouteMatch();
  const safePath = path === "/" ? null : path;

  return (
    <Box data-testid="onboardingPage">
      <Switch>
        <Route path={`${safePath}/name`}>
          <OnboardingEnterNamePage />
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
