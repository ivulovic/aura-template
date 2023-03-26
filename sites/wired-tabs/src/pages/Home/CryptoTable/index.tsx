import { useMemo } from "react";
import Table from "../../../components/Table";
import useTickerRealtimeData from "../../../providers/TickerSymbol/useTickerRealtimeData";
import { columnDefinition } from "./data";
import { CryptoTableProps } from "./types";

const { Row, Field } = Table;

export default function CryptoTable(props: CryptoTableProps): JSX.Element {
    const { symbols } = props;
    const data = useTickerRealtimeData({ symbols });

    const Header = useMemo(() => {
        return (
            <Row>
                {columnDefinition.map((field) => (
                    <Field key={field.key}>{field.name}</Field>
                ))}
            </Row>
        );
    }, [columnDefinition]);

    return (
        <div className="home">
            <Table>
                {Header}
                {data.map((record) => (
                    <Row key={record.chanId}>
                        {columnDefinition.map((column) => (
                            <Field key={`${record.chanId}_${column.key}`}>{record[column.key]}</Field>
                        ))}
                    </Row>
                ))}
            </Table>
        </div>
    );
}
