import { PayloadAction, createSlice } from "@web/core";

import { ABOUT_PAGE_SCOPE, initialState } from "./constants";

const slice = createSlice({
  name: ABOUT_PAGE_SCOPE,
  initialState: initialState,
  reducers: {
    loadData: (state) => {
      state.loading = true;
    },
    loadDataDone: (state, action: PayloadAction<Array<number>>) => {
      state.data = action.payload;
      state.loading = false;
    },
    loadDataFailed: (state) => {
      state.loading = false;
    },
  },
});

export const { actions, reducer } = slice;
