import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import { translationMessages } from "@web/translations";

import DefaultLayout from "./components/Layout/Default";
import { IntlProvider, defaultLocale } from "./core";
import store from "./core/redux/utils/createStore";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import { ThemeProvider } from "./providers/Theme";

const container = document.getElementById("root");

const root = createRoot(container!);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    ),
  },
  {
    path: "about",
    element: (
      <DefaultLayout>
        <AboutPage />
      </DefaultLayout>
    ),
  },
]);

root.render(
  <ReduxProvider store={store.store}>
    <PersistGate loading={<></>} persistor={store.persistor}>
      <IntlProvider locale={defaultLocale} defaultLocale={defaultLocale} messages={translationMessages}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </IntlProvider>
    </PersistGate>
  </ReduxProvider>,
);
