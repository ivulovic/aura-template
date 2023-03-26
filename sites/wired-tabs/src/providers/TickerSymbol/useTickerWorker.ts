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

    const unsubscribe = (chanId: string) => worker.port.postMessage({
        event: 'unsubscribe',
        chanId: Number(chanId)
    });

    const startConnection = () => worker.port.postMessage({
        connection: "init",
    });

    const stopConnection = () => worker.port.postMessage({
        connection: "stop",
    });

    useEffect(() => {
        startConnection();
        return () => {
            stopConnection();
        }
    }, [])

    useEffect(() => {
        worker.port.onmessage = (e) => {
            // console.log("[HOOK]", e.data);
            onMessage(e.data);
            // if (e.data.includes("type")) {
            //     const data = JSON.parse(e.data);
            //     if (data.type) {
            //         console.log("data.type", data.type);
            //     }
            // }
        };
    }, [worker]);

    return { subscribe, unsubscribe };
}
