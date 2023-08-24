import { memo, PropsWithChildren } from "react";
import Field from "./Field";
import Row from "./Row";
import { TableProps } from "./types";

function Table(props: PropsWithChildren<TableProps>): JSX.Element {
  return <table>{props.children}</table>;
}

Table.Row = Row;
Table.Field = Field;

export default Table;
