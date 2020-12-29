import { Box } from "@chakra-ui/react";
import React from "react";
import { Routes } from "./Routes";

// Onboarding flow
// 1) Enter name
// 2) Get location

function App() {
  return (
    <Box data-testid="app">
      <Routes />
    </Box>
  );
}

export default App;
