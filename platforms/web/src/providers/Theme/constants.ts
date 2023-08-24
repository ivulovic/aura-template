import { ThemeEnum, IThemeState } from "./types";
import { getThemeFromStorage } from "./utils";

export const THEME_SCOPE = "theme";

export const initialState: IThemeState = {
  selected: getThemeFromStorage() || ThemeEnum.System,
};
