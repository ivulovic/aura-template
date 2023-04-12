import { useState } from "react";

import I18NContext from "./context";
import IntlInitializer from "./IntlInitializer";
import { IntlProviderProps } from "./types";

const IntlProvider = (props: IntlProviderProps): JSX.Element => {
  const { locale } = props;
  const [internalLocale, setInternalLocale] = useState(locale);
  return (
    <I18NContext.Provider
      value={{
        locale: internalLocale,
        changeLocale: setInternalLocale,
      }}
    >
      <IntlInitializer {...props} />
    </I18NContext.Provider>
  );
};

export default IntlProvider;
