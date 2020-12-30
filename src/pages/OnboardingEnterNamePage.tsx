import { Input, Stack, Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export const OnboardingEnterNamePage: React.FC = () => {
  const [state, setState] = useContext(AppContext);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setState({ ...state, requiredData: { ...state.requiredData, name } });
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
      >
        Done
      </Button>
    </Stack>
  );
};
