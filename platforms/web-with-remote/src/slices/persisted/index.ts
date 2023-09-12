import { createSlice, createPersistedSlice } from "@web/core";

import { PERSISTED_SCOPE, initialState } from "./constants";

const slice = createSlice({
  name: PERSISTED_SCOPE,
  initialState: initialState,
  reducers: {
    updatePersisted: (state) => {
      state.persisted = Math.random();
    },
  },
});

export const { actions, reducer } = slice;

export default createPersistedSlice(PERSISTED_SCOPE, reducer);
