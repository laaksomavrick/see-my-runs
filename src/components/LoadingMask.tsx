import { Flex, Spinner, Fade } from "@chakra-ui/react";
import React from "react";

export interface ILoadingMask {
  show: boolean;
}

export const LoadingMask: React.FC<ILoadingMask> = ({ show }) => {
  return (
    <Fade in={show} unmountOnExit={true}>
      <Flex
        h="100vh"
        w="100vw"
        zIndex="999"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="xl" />
      </Flex>
    </Fade>
  );
};
