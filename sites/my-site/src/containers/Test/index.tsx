import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useReducer, useSaga } from "@my-site/core";

import { TEST_CONTAINER_SCOPE } from "./constants";
import saga from "./saga";
import { selectData } from "./selectors";
import { actions, reducer } from "./slice";

export default function TestContainer(): JSX.Element {
  const dispatch = useDispatch();
  useSaga({ key: TEST_CONTAINER_SCOPE, saga });
  useReducer({ key: TEST_CONTAINER_SCOPE, reducer });
  useEffect(() => {
    console.log("init container");
    dispatch(actions.hello());
  }, [dispatch]);
  const data = useSelector(selectData);
  return <div>Test {data.map((x: number) => x)}</div>;
}
