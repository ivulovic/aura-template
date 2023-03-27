import { memo, PropsWithChildren } from "react";

function Field(props: PropsWithChildren<{}>): JSX.Element {
    return <td>{props.children}</td>;
}

export default memo(Field);