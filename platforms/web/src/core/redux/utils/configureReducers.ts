// eslint-disable-next-line no-restricted-imports
import { combineReducers } from "@reduxjs/toolkit";

const configureReducers =
  (lazyInjectedReducers = {}) =>
  (rootReducers = {}): any => {
    if (Object.keys(lazyInjectedReducers).length === 0 && Object.keys(rootReducers).length === 0) {
      return (state: any): any => state;
    } else {
      return combineReducers({
        ...lazyInjectedReducers,
        ...rootReducers,
      });
    }
  };

export default configureReducers;
