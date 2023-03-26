import { memo, PropsWithChildren } from "react";

function Field(props: PropsWithChildren<{}>): JSX.Element {
    console.log("rerender field", props);
    return <td>{props.children}</td>;
}

export default memo(Field);