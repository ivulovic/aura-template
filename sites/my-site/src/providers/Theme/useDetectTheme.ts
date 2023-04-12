import { useSelector } from "@my-site/core";

import { selectThemeKey } from "./slice/selectors";
import { ThemeEnum } from "./slice/types";
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
