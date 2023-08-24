import { IRootState, createSelector } from "@web/core/redux";

import { ABOUT_PAGE_SCOPE, initialState } from "./constants";
import { AboutPageState } from "./types";

export const selectState = (state: IRootState): AboutPageState => state?.[ABOUT_PAGE_SCOPE] || initialState;

export const selectLoading = createSelector([selectState], (state: AboutPageState) => {
  return state.loading;
});

export const selectData = createSelector([selectState], (state: AboutPageState) => {
  return state.data;
});
