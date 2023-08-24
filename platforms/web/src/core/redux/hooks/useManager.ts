import { Reducer } from "redux";
import { createManager } from "redux-injectors";
import { Saga } from "redux-saga";

import { IRootState } from "../IRootState";

interface Options {
  name: string;
  key: keyof IRootState;
  saga?: Saga;
  reducer?: Reducer;
}

export const useManager = (
  options: Options,
): React.ComponentType<{
  children: React.ReactNode;
}> => createManager(options as any);
