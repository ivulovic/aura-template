/* eslint-disable no-restricted-imports */
export { default as IntlProvider } from "./IntlProvider";
export { formatTranslationMessages } from "./utils";
export {
  FormattedDate,
  FormattedDateParts,
  FormattedDateTimeRange,
  FormattedDisplayName,
  FormattedList,
  FormattedListParts,
  FormattedMessage,
  FormattedNumber,
  FormattedNumberParts,
  FormattedPlural,
  FormattedRelativeTime,
  FormattedTime,
  FormattedTimeParts,
  useIntl,
  createIntl,
  injectIntl,
} from "react-intl";

export { default as useLanguageProvider } from "./useIntlProvider";

export const defaultLocale = "en";
