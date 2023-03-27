import { useEffect, useMemo, useState } from "react";
import { DataWorkerParams } from "./types";

export default function useDataWorker(params: DataWorkerParams) {
    const { onMessage } = params;
    
    const worker = useMemo(() => {
        return new SharedWorker(new URL("./ticker.worker.js", import.meta.url), {
            name: 'equilibrius-ticker-worker'
        });
    }, []);
    
    const subscribe = (symbol: string) => worker.port.postMessage({
        event: 'subscribe',
        channel: 'ticker',
        symbol,
    });

    const unsubscribe = (chanId: number) => worker.port.postMessage({
        event: 'unsubscribe',
        chanId: chanId
    });

    useEffect(() => {
        worker.port.onmessage = (e) => {
            onMessage(e.data);
        };
        return () => {
            worker.port.close();
        }
    }, [worker]);

    return { subscribe, unsubscribe };
}
