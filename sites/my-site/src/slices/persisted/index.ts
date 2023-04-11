import { createSlice, createPersistedSlice } from "@my-site/core";

const slice = createSlice({
  name: "persistedKey",
  initialState: { persisted: "persisted" },
  reducers: {
    hello: () => {},
  },
});

export default createPersistedSlice("persistedKey", slice.reducer);
