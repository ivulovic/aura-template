import { IRootState, createSelector } from "@my-site/core/redux";

import { TEST_CONTAINER_SCOPE, initialState } from "./constants";
import { TestContainerState } from "./types";

export const selectState = (state: IRootState): TestContainerState => state?.[TEST_CONTAINER_SCOPE] || initialState;

export const selectData = createSelector([selectState], (state: TestContainerState) => {
  return state.data;
});
