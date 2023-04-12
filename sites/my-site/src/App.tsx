import { MyButton } from "my-ui";
import { useState } from "react";

import "./App.css";
import { FormattedMessage, useLanguageProvider } from "./core";
import logo from "./logo.svg";

function App(): JSX.Element {
  const [count] = useState(0);
  const { locale, changeLocale } = useLanguageProvider();

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
