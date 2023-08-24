import { PropsWithChildren } from "react";

export default function Main(props: PropsWithChildren<{}>): JSX.Element {
  return <main className="main">{props.children}</main>;
}
