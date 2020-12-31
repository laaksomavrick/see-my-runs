import { Box } from "@chakra-ui/react";
import React from "react";
import { AppProvider } from "./providers/AppProvider";
import { Routes } from "./Routes";

function App() {
  return (
    <Box data-testid="app">
      <AppProvider>
        <Routes />
      </AppProvider>
    </Box>
  );
}

export default App;
