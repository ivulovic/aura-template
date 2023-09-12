import { AnyAction } from "redux";
import { CallEffect, PutEffect } from "redux-saga/effects";

import { RequestResult } from "@web/core/request";

import { IRootState } from "./IRootState";

export type TRootStateKeyType = keyof IRootState;

export type SagaResult = Generator<CallEffect<RequestResult> | PutEffect<AnyAction>, void> | CallEffect<RequestResult> | PutEffect<AnyAction>;
