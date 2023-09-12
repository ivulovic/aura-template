import { IRootState, createSelector } from "@web/core/redux";

import { REMOTE_PAGE_SCOPE, initialState } from "./constants";
import { AboutPageState } from "./types";

export const selectState = (state: IRootState): AboutPageState => state?.[REMOTE_PAGE_SCOPE] || initialState;

export const selectLoading = createSelector([selectState], (state: AboutPageState) => {
  return state.loading;
});

export const selectData = createSelector([selectState], (state: AboutPageState) => {
  return state.data;
});
