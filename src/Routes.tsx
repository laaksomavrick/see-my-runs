import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { LoadingMask } from "./components/LoadingMask";
import { AppContext, IAppState } from "./contexts/AppContext";
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

  const showLoadingMask =
    state.hasRequiredData === undefined || state.hasRequiredData === null;

  if (showLoadingMask) {
    return <LoadingMask show={showLoadingMask} />;
  }

  return (
    <Box>
      <Box h="100vh">
        <Box h="100%" p={[4]}>
          <Router>
            <Switch>
              <Route path="/onboarding">
                <OnboardingPage />
              </Route>
              <Route path="*">
                <ProtectedMyRunsPage state={state} />
              </Route>
            </Switch>
          </Router>
        </Box>
      </Box>
    </Box>
  );
};

export const ProtectedMyRunsPage: React.FC<{ state: IAppState }> = ({
  state,
}) => {
  if (state.hasRequiredData === false) {
    return <Redirect to="/onboarding" />;
  }

  return <MyRunsPage />;
};
