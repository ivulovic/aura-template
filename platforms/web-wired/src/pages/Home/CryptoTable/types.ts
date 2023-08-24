import { TickerRecord } from "../../../providers/TickerSymbol/types";

export interface ColumnDefinition {
  name: string;
  key: keyof TickerRecord;
}

export interface CryptoTableProps {
  symbols: Array<string> | undefined;
}
