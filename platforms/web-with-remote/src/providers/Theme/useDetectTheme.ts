import { useSelector } from "@web/core";

import { selectThemeKey } from "./selectors";
import { ThemeEnum } from "./types";
import { isSystemDark } from "./utils";

export interface IThemeDetector {
  preferedTheme: string;
  opositeTheme: ThemeEnum;
}
export const useDetectTheme = (): IThemeDetector => {
  const themeKey = useSelector(selectThemeKey);
  const preferedTheme: any = themeKey === ThemeEnum.System ? (isSystemDark ? ThemeEnum.Dark : ThemeEnum.Light) : themeKey;
  const opositeTheme: ThemeEnum = preferedTheme === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark;

  return { preferedTheme, opositeTheme };
};
