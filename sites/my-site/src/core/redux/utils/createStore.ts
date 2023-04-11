import persistService from "../../../slices/persisted/index";

// import { PERSISTED_SCOPE } from '@implementation/persisted/settings';
import { configureAppStore } from "./configureStore";

const rootServices = {
  ["persistedKey"]: persistService,
};

const store = configureAppStore(rootServices, {
  blacklist: Object.keys(rootServices),
});

export default store;
