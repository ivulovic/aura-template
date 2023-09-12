import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// eslint-disable-next-line no-restricted-imports

import { TRootStateKeyType } from "../types";

const createPersistedSlice = (key: TRootStateKeyType, service: any, options?: any): any => {
  const { version = 1, stringify = true, debug = true } = options || {};

  return persistReducer(
    {
      key,
      storage,
      version,
      serialize: stringify,
      debug,
    },
    service,
  );
};

export default createPersistedSlice;
