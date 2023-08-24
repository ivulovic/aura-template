export interface DataWorkerParams {
  onMessage(data: string): void;
}

export interface TickerInfo {
  chanId: number;
  channel: "ticker";
  event: "subscribed" | "ws" | "fetch";
  pair: string;
  symbol: string;
}

export interface TickerRecord extends TickerInfo {
  ask: number;
  askSize: number;
  bid: number;
  bidSize: number;
  dailyChange: number;
  dailyChangeRelative: number;
  high: number;
  lastPrice: number;
  low: number;
  volume: number;
}

export interface TickerRealtimeDataParams {
  symbols: Array<string> | undefined;
}
