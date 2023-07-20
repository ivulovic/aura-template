import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useReducer, useSaga } from "@my-site/core";

import { ABOUT_PAGE_SCOPE } from "./constants";
import saga from "./saga";
import { selectData, selectLoading } from "./selectors";
import { actions, reducer } from "./slice";
import "./style.scss";

export default function AboutPage(): JSX.Element {
  const dispatch = useDispatch();
  useSaga({ key: ABOUT_PAGE_SCOPE, saga });
  useReducer({ key: ABOUT_PAGE_SCOPE, reducer });

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
          <li key={x}>Item {x}</li>
        ))}
      </ul>
    );
  };
  return (
    <div className="about-page">
      <h1>About Page</h1>
      {loading ? <Loading /> : <Data />}
    </div>
  );
}
