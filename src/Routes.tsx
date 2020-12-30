import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import { MyRunsPage } from "./pages/MyRunsPage";
import { OnboardingPage } from "./pages/OnboardingPage";

export const Routes: React.FC = () => {
  const [state] = useContext(AppContext);
  const debug = () => {
    if (process.env.NODE_ENV === "production") {
      return null;
    }

    return <Box>{JSON.stringify(state)}</Box>;
  };
  return (
    <Box>
      {debug()}
      <Box h="100vh">
        <Box h="100%" p={[4]}>
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
        </Box>
      </Box>
    </Box>
  );
};
