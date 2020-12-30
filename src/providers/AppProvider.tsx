import React, { useEffect, useState } from "react";
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

const setDataInLocalStorage = (state: IAppState): void => {
  const stringified = JSON.stringify(state);
  localStorage.setItem(APP_DATA_KEY, stringified);
};

export const AppProvider: React.FC = ({ children }) => {
  const [appState, setAppState] = useState<IAppState | undefined>(
    getDataFromLocalStorage()
  );

  const state = appState == null ? initialAppState : appState;

  useEffect(() => {
    const required = state.requiredData;

    if (required?.location == null || required?.name == null) {
      setAppState({ ...state, hasRequiredData: false });
    } else {
      setAppState({ ...state, hasRequiredData: true });
      setDataInLocalStorage({ ...state, hasRequiredData: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.requiredData]);

  return (
    <AppContext.Provider value={[state, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};
