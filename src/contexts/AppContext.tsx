import { createContext, Dispatch, SetStateAction } from "react";

export interface IRequiredData {
  name?: string;
  location?: any;
}

export interface IAppState {
  /**
   * Stuff required for the app to function (i.e. to not prompt onboarding)
   */
  requiredData?: IRequiredData;

  /**
   * Undefined while we're checking (e.g. we don't know), true or false when we do know
   */
  hasRequiredData?: boolean;
}

export interface IAppContext {
  state: IAppState;
  setState?: (newState: IAppState) => void;
}

export type AppContextType = [
  IAppState,
  Dispatch<SetStateAction<IAppState | undefined>>
];

export const initialAppState: IAppState = {
  requiredData: undefined,
  hasRequiredData: undefined,
};

export const AppContext = createContext<AppContextType>([
  initialAppState,
  () => {},
]);

export function isIAppState(data: any): data is IAppState {
  const maybe = data as IAppState;
  const maybeRequiredData = maybe?.requiredData;

  return (
    maybeRequiredData != null &&
    maybeRequiredData.name != null &&
    maybeRequiredData.location != null
  );
}
