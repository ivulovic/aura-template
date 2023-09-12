import { useInjectSaga } from "redux-injectors";
import { Saga } from "redux-saga";

import { IRootState } from "../IRootState";

interface UseSagaOptions {
  key: keyof IRootState;
  saga: Saga;
}

export const useSaga = (options: UseSagaOptions): boolean => useInjectSaga(options as any);
