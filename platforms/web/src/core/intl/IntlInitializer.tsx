import { IntlProvider as IntlProviderOriginal } from "react-intl";

import { IntlProviderProps } from "./types";
import useLanguageProvider from "./useIntlProvider";

export default function IntlInitializer(props: IntlProviderProps): JSX.Element {
  const context = useLanguageProvider();
  const { children, defaultLocale, messages, ...restIntlProps } = props;
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <IntlProviderOriginal locale={context.locale} messages={messages[context.locale]} defaultLocale={defaultLocale} {...restIntlProps}>
      {children}
    </IntlProviderOriginal>
  );
}
