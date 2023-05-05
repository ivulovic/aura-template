import { PropsWithChildren } from "react";

import Header from "@my-site/components/Header";

export default function DefaultLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
