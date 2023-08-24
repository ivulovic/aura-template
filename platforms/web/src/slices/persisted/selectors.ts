import { IRootState, createSelector } from "@web/core";

import { PERSISTED_SCOPE, initialState } from "./constants";
import { PersistedState } from "./types";

export const selectState = (state: IRootState): any => state?.[PERSISTED_SCOPE] || initialState;

export const selectPersisted = createSelector([selectState], (state: PersistedState) => {
  return state.persisted;
});
