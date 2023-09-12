import { createSelector, IRootState } from "@web/core";

import { initialState, THEME_SCOPE } from "./constants";

export const selectThemeKey = createSelector([(state: IRootState) => state?.[THEME_SCOPE] || initialState], (theme) => theme.selected);
