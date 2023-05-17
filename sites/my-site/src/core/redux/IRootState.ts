import { TEST_CONTAINER_SCOPE } from "@my-site/containers/Test/constants";
import { TestContainerState } from "@my-site/containers/Test/types";
import { THEME_SCOPE } from "@my-site/providers/Theme/slice/constants";
import { IThemeState } from "@my-site/providers/Theme/slice/types";

export interface IRootState {
  normalKey: any;
  persistedKey: any;
  [THEME_SCOPE]: IThemeState;
  [TEST_CONTAINER_SCOPE]: TestContainerState;
}
