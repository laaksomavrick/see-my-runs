import { Input, Stack, Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export const OnboardingEnterNamePage: React.FC = () => {
  const [state, setState] = useContext(AppContext);
  const history = useHistory();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setState({ ...state, requiredData: { ...state.requiredData, name } });
  };

  const onNext = () => {
    console.log(state);
    if (state.requiredData?.name == null) {
      return;
    }
    console.log("pushing");
    history.push("location");
  };

  const canProceed =
    state?.requiredData?.name != null && state?.requiredData?.name !== "";

  return (
    <Stack spacing={2}>
      <Input
        variant="unstyled"
        placeholder="Enter your name"
        onChange={onInputChange}
      />
      <Button
        width="min-content"
        colorScheme="teal"
        isDisabled={canProceed === false}
        onClick={onNext}
      >
        Next
      </Button>
    </Stack>
  );
};
