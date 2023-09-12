export interface IThemeState {
  selected: ThemeEnum;
}

export enum ThemeEnum {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}
