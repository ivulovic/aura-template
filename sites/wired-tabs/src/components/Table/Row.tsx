import { memo, PropsWithChildren } from "react";

function Row(props: PropsWithChildren<{}>): JSX.Element {
  return <tr>{props.children}</tr>;
}

export default memo(Row);
