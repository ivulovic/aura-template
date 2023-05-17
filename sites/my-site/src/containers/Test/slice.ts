import { PayloadAction, createSlice } from "@my-site/core";

import { TEST_CONTAINER_SCOPE, initialState } from "./constants";

const slice = createSlice({
  name: TEST_CONTAINER_SCOPE,
  initialState: initialState,
  reducers: {
    hello: () => {},
    helloPut: (state, action: PayloadAction<Array<number>>) => {
      state.data = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
