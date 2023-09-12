import { createContext } from "react";

import { IntlProviderContext } from "./types";

const I18NContext = createContext<IntlProviderContext | null>(null);

export default I18NContext;
