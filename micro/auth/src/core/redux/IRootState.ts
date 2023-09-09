import { REMOTE_PAGE_SCOPE } from "@web/pages/Remote/constants";
import { AboutPageState } from "@web/pages/Remote/types";
import { PERSISTED_SCOPE } from "@web/slices/persisted/constants";
import { PersistedState } from "@web/slices/persisted/types";

export interface IRootState {
  [PERSISTED_SCOPE]: PersistedState;
  [REMOTE_PAGE_SCOPE]: AboutPageState;
}
