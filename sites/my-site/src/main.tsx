import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import { translationMessages } from "@my-site/translations";

import App from "./App";
import { IntlProvider, defaultLocale } from "./core";
import store from "./core/redux/utils/createStore";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <ReduxProvider store={store.store}>
    <PersistGate loading={<></>} persistor={store.persistor}>
      <IntlProvider locale={defaultLocale} defaultLocale={defaultLocale} messages={translationMessages}>
        <App />
      </IntlProvider>
    </PersistGate>
  </ReduxProvider>,
);
