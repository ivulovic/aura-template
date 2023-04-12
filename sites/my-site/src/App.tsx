import { MyButton } from "my-ui";
import { useState } from "react";

import { FormattedMessage, useDispatch, useLanguageProvider } from "@my-site/core";

import logo from "./logo.svg";
import { useThemeActions } from "./providers/Theme/slice";
import { useDetectTheme } from "./providers/Theme/useDetectTheme";

function App(): JSX.Element {
  const [count] = useState(0);
  const { locale, changeLocale } = useLanguageProvider();
  const dispatch = useDispatch();
  const { opositeTheme } = useDetectTheme();
  const actions = useThemeActions();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <FormattedMessage id="homepage.title" />
        </p>
        <button className="dispatch-button" onClick={() => changeLocale(locale === "en" ? "de" : "en")}>
          Change
        </button>
        <button className="dispatch-button" onClick={() => dispatch(actions.changeTheme(opositeTheme))}>
          Change theme to: {opositeTheme}
        </button>
        <MyButton />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {" | "}
          <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
