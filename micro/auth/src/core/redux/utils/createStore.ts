import { PERSISTED_SCOPE } from "@web/slices/persisted/constants";

import persistedSlice from "../../../slices/persisted/index";

import { configureAppStore } from "./configureStore";

const rootReducers = {
  [PERSISTED_SCOPE]: persistedSlice,
};

const store = configureAppStore(rootReducers, {
  blacklist: Object.keys(rootReducers),
});

export default store;
