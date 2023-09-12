import { createSlice, PayloadAction, useReducer } from "@web/core";

import { THEME_SCOPE, initialState } from "./constants";
import { ThemeEnum } from "./types";

const slice = createSlice({
  name: THEME_SCOPE,
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeEnum>) {
      state.selected = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useThemeProvider = () => {
  useReducer({ key: slice.name, reducer: slice.reducer });
};

export const useThemeActions = () => {
  return slice.actions;
};
