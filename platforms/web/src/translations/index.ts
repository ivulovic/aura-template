import { formatTranslationMessages } from "@web/core";

import de from "./de/translation.json";
import en from "./en/translation.json";

export const translationMessages = {
  en: formatTranslationMessages("en", en),
  de: formatTranslationMessages("de", de),
};
