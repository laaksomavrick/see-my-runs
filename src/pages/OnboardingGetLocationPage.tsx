import { Button, Spinner, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export const OnboardingGetLocationPage: React.FC = () => {
  const [state, setState] = useContext(AppContext);
  const history = useHistory();

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { coords } = position;
      const { latitude, longitude } = coords;

      setState({
        ...state,
        requiredData: {
          ...state.requiredData,
          location: { latitude, longitude },
        },
      });
    },
    (err) => {
      console.error(err);
    }
  );

  const onNext = () => {
    if (state.requiredData?.name == null) {
      return;
    }
    history.replace("/");
  };

  const canProceed =
    state?.requiredData?.location?.latitude != null &&
    state?.requiredData?.location?.longitude != null;

  return (
    <Stack spacing={2}>
      {canProceed === false ? (
        <Spinner size="xl" />
      ) : (
        <Button width="min-content" colorScheme="teal" onClick={onNext}>
          Done
        </Button>
      )}
    </Stack>
  );
};
