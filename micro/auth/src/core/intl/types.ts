import { Dispatch, SetStateAction } from "react";
import { IntlProvider as IntlProviderOriginal, MessageFormatElement } from "react-intl";

type IIntlProviderProps = Omit<React.ComponentProps<typeof IntlProviderOriginal>, "messages">;

export interface IntlProviderProps extends IIntlProviderProps {
  children: React.ReactNode;
  locale: string;
  defaultLocale: string;
  messages: Record<string, Record<string, string>> | Record<string, Record<string, MessageFormatElement[]>>;
}

export interface IntlProviderContext {
  locale: string;
  changeLocale: Dispatch<SetStateAction<string>>;
}
