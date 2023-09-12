import { ThemeEnum } from "./types";

export const isSystemDark = window?.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)")?.matches : undefined;

export function saveTheme(theme: ThemeEnum) {
  window.localStorage && localStorage.setItem("selectedTheme", theme);
}

export function getThemeFromStorage(): ThemeEnum | null {
  return window.localStorage ? (localStorage.getItem("selectedTheme") as ThemeEnum) || null : null;
}
