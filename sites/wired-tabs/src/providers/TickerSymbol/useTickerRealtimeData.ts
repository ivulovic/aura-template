import { useEffect, useState } from "react";
import { TickerRealtimeDataParams, TickerRecord } from "./types";
import useDataWorker from "./useTickerWorker";

export interface RealtimeData {
    data: Array<TickerRecord>;
    initialData: Record<string, TickerRecord>;
}

export default function useTickerRealtimeData(params: TickerRealtimeDataParams ): RealtimeData {
    const { symbols } = params;
    const INITIAL_DATA = {};
    const [data, setData] = useState<Record<number, TickerRecord>>(INITIAL_DATA);
    const [initialData, setInitialData] = useState<Record<string, TickerRecord>>(INITIAL_DATA);
    
    useEffect(() => {
        if(symbols){
            const tickers = symbols.map(x => `t${x.toUpperCase()}`).join(',');
            fetch(`/pub/tickers?symbols=${tickers}`).then(res => res.json()).then(data => {
                let initialValues: Record<string, TickerRecord> = {};
                data.forEach((record: Array<any>, i: number) => {
                    const [symbol, bid, bidSize, ask, askSize, dailyChange, dailyChangeRelative, lastPrice, volume, high, low] = record;
                    const pair = symbol.slice(1);
                    console.log('pair', pair);
                    initialValues[pair] = {
                        chanId: i, channel:'ticker', event: 'subscribed',
                        symbol, pair, bid, bidSize, ask, askSize, dailyChange, dailyChangeRelative, lastPrice, volume, high, low};
                })
                setInitialData(initialValues);
            }); 
            
        }
    }, [symbols]);

    const onMessage = (e: any) => {
        if (e.event === "subscribed") {
            setData((s) => ({
                ...s,
                [e.chanId]: e,
            }));
        }
        if (e.event === "data") {
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
    useEffect(() => {
        symbols?.map(symbol => subscribe(`t${symbol.toUpperCase()}`));

        return () => {
            Object.keys(data).forEach((chanId) => unsubscribe(chanId));
            setData(INITIAL_DATA);
        };
    }, [symbols]);

    return {
        data: Object.values(data), 
        initialData
    };
}
