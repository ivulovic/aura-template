import { useEffect, useState } from "react";
import { TickerRealtimeDataParams, TickerRecord } from "./types";
import useDataWorker from "./useTickerWorker";

export default function useTickerRealtimeData(params: TickerRealtimeDataParams ): Array<TickerRecord> {
    const { symbols } = params;
    const INITIAL_DATA = {};
    const [data, setData] = useState<Record<number, TickerRecord>>(INITIAL_DATA);
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

        // if(!symbols){
        //     setData(INITIAL_DATA);
        //     return;
        // }

        symbols?.map(symbol => subscribe(`t${symbol.toUpperCase()}`));

        return () => {
            Object.keys(data).forEach((chanId) => unsubscribe(chanId));
            setData(INITIAL_DATA);
        };
    }, [symbols]);

    return Object.values(data);
}
