import flatten from "./flatten";

export const formatTranslationMessages = (locale: string, messages: any) => {
  const flattenedMessages: Record<string, any> = flatten(messages);
  const flattenFormattedMessages = (formattedMessages: Record<string, any>, key: string) => {
    const formattedMessage = flattenedMessages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(flattenedMessages).reduce(flattenFormattedMessages, {});
};
