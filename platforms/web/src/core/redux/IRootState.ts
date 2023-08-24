import { ABOUT_PAGE_SCOPE } from "@web/pages/About/constants";
import { AboutPageState } from "@web/pages/About/types";
import { THEME_SCOPE } from "@web/providers/Theme/constants";
import { IThemeState } from "@web/providers/Theme/types";
import { PERSISTED_SCOPE } from "@web/slices/persisted/constants";
import { PersistedState } from "@web/slices/persisted/types";

export interface IRootState {
  [PERSISTED_SCOPE]: PersistedState;
  [THEME_SCOPE]: IThemeState;
  [ABOUT_PAGE_SCOPE]: AboutPageState;
}
