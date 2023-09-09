// eslint-disable-next-line no-restricted-imports
import { configureStore, StoreEnhancer } from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import { persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage";
import createSagaMiddleware from "redux-saga";

import configureReducers from "./configureReducers";

export function configureAppStore(rootReducers = {}, options: any): any {
  const { blacklist = [] } = options;
  const sagaMiddleware = createSagaMiddleware();
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer: (lazyInjectedReducers) => configureReducers(lazyInjectedReducers)(rootReducers),
      runSaga,
    }),
  ] as StoreEnhancer[];

  const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist,
  };
  const persistableReducer = persistReducer(persistConfig, configureReducers()(rootReducers));

  const store = configureStore({
    reducer: persistableReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      ...middlewares,
    ],
    devTools: process.env.NODE_ENV !== "production",
    enhancers,
  });

  const persistor = persistStore(store, null, () => {
    console.log("done rehydrate");
  });

  return { store, persistor };
}
