import { ABOUT_PAGE_SCOPE } from "@my-site/pages/About/constants";
import { AboutPageState } from "@my-site/pages/About/types";
import { THEME_SCOPE } from "@my-site/providers/Theme/constants";
import { IThemeState } from "@my-site/providers/Theme/types";
import { PERSISTED_SCOPE } from "@my-site/slices/persisted/constants";
import { PersistedState } from "@my-site/slices/persisted/types";

export interface IRootState {
  [PERSISTED_SCOPE]: PersistedState;
  [THEME_SCOPE]: IThemeState;
  [ABOUT_PAGE_SCOPE]: AboutPageState;
}
