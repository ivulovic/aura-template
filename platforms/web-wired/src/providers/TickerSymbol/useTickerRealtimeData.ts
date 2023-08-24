import { useEffect, useState } from "react";
import { TickerRealtimeDataParams, TickerRecord } from "./types";
import useDataWorker from "./useTickerWorker";

export interface RealtimeData {
  data: Array<TickerRecord>;
  initialData: Record<string, TickerRecord>;
}

export default function useTickerRealtimeData(params: TickerRealtimeDataParams): RealtimeData {
  const { symbols } = params;
  const INITIAL_DATA = {};
  const [isReady, setIsReady] = useState(false);
  const [data, setData] = useState<Record<number, TickerRecord>>(INITIAL_DATA);
  const [initialData, setInitialData] = useState<Record<string, TickerRecord>>(INITIAL_DATA);

  useEffect(() => {
    if (symbols && isReady) {
      symbols.map((symbol) => subscribe(`t${symbol.toUpperCase()}`));
      const tickers = symbols.map((x) => `t${x.toUpperCase()}`).join(",");
      fetch(`/pub/tickers?symbols=${tickers}`)
        .then((res) => res.json())
        .then((data) => {
          let initialValues: Record<string, TickerRecord> = {};
          data.forEach((record: Array<any>, i: number) => {
            const [symbol, bid, bidSize, ask, askSize, dailyChange, dailyChangeRelative, lastPrice, volume, high, low] = record;
            const pair = symbol.slice(1);
            initialValues[pair] = {
              chanId: i,
              channel: "ticker",
              event: "fetch",
              symbol,
              pair,
              bid,
              bidSize,
              ask,
              askSize,
              dailyChange,
              dailyChangeRelative,
              lastPrice,
              volume,
              high,
              low,
            };
          });
          setInitialData(initialValues);
        });
    }
    return () => {
      Object.keys(data).forEach((chanId) => unsubscribe(Number(chanId)));
      setData(INITIAL_DATA);
      setInitialData(INITIAL_DATA);
    };
  }, [isReady, symbols]);

  const onMessage = (e: any) => {
    if (e.isReady) {
      setIsReady(e.isReady);
    }
    if (e.event === "subscribed") {
      setData((s) => ({
        ...s,
        [e.chanId]: e,
      }));
    }
    if (e.event === "ws") {
      setData((s) => ({
        ...s,
        [e.chanId]: {
          ...(s[e.chanId] || {}),
          ...e,
        },
      }));
    }
  };
  const { subscribe, unsubscribe } = useDataWorker({
    onMessage,
  });
  return {
    data: Object.values(data),
    initialData,
  };
}
