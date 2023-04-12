import { useContext } from "react";

import I18NContext from "./context";
import { IntlProviderContext } from "./types";

export default function useIntlProvider(): IntlProviderContext {
  const context = useContext(I18NContext);
  if (!context) {
    throw new Error("You are using i18nContext outside of IntlProvider.");
  }
  return context;
}
