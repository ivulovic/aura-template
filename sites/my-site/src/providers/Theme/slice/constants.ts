import { getThemeFromStorage } from "../utils";

import { ThemeEnum, IThemeState } from "./types";

export const THEME_SCOPE = "theme";

export const initialState: IThemeState = {
  selected: getThemeFromStorage() || ThemeEnum.System,
};
