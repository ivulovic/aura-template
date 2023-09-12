import { PropsWithChildren } from "react";

import Header from "@web/components/Header";

export default function DefaultLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
