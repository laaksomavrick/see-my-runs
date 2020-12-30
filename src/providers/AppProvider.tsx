import React, { createContext, useState, useEffect, useCallback } from "react";
import {
  AppContext,
  IAppState,
  initialAppState,
  isIAppState,
} from "../contexts/AppContext";

const APP_DATA_KEY = "seemyruns";

const getDataFromLocalStorage = (): IAppState | undefined => {
  const dataString = localStorage.getItem(APP_DATA_KEY) || undefined;

  if (dataString == null) {
    return undefined;
  }

  const data = JSON.parse(dataString);

  if (isIAppState(data) === false) {
    return undefined;
  }

  const appContext = data as IAppState;
  appContext.hasRequiredData = true;

  return appContext;
};

export const AppProvider: React.FC = ({ children }) => {
  const [appState, setAppState] = useState<IAppState | undefined>(
    getDataFromLocalStorage()
  );

  const state = appState == null ? initialAppState : appState;

  return (
    <AppContext.Provider value={[state, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};
