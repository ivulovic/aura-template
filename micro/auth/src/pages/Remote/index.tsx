import { useReducer, useSaga } from "@web/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { REMOTE_PAGE_SCOPE } from "./constants";
import saga from "./saga";
import { selectData, selectLoading } from "./selectors";
import { actions, reducer } from "./slice";
import "./style.scss";

export default function RemotePage(): JSX.Element {
  const dispatch = useDispatch();
  useSaga({ key: REMOTE_PAGE_SCOPE, saga });
  useReducer({ key: REMOTE_PAGE_SCOPE, reducer });

  useEffect(() => {
    dispatch(actions.loadData());
  }, [dispatch]);

  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);

  const Loading = (): JSX.Element => <div>Loading...</div>;
  const Data = (): JSX.Element => {
    if (!data.length) {
      return <div>No Data</div>;
    }
    return (
      <ul>
        {data.map((x: number) => (
          <li key={x}>Remote Item {x}</li>
        ))}
      </ul>
    );
  };
  return (
    <div className="about-page">
      <h1>Remote Auth Page</h1>
      {loading ? <Loading /> : <Data />}
    </div>
  );
}
