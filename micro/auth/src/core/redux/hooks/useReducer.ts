import { Reducer } from "redux";
import { useInjectReducer } from "redux-injectors";

import { IRootState } from "../IRootState";

interface Options {
  key: keyof IRootState;
  reducer: Reducer;
}

export const useReducer = (options: Options): boolean => useInjectReducer(options as any);
