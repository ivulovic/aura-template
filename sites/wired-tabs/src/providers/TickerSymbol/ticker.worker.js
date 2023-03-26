const ports = [];
const pendingEvents = [];

self.onconnect = function (e) {
    const port = e.ports[0];
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

    ports.push(port);

    const processTickerEvent = (dataStringified) => {
        const data = JSON.parse(dataStringified);
        if (Array.isArray(data)) {
            const [chanId, values] = data;
            if (values !== "hb") {
                const [bid, bidSize, ask, askSize, dailyChange, dailyChangeRelative, lastPrice, volume, high, low] = values;
                port.postMessage({
                    chanId,
                    event: "data",
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
                });
            }
        }
        if (data.event) {
            port.postMessage(data);
        }
    };

    port.onmessage = function (event) {
        const workerData = event.data;

        // console.log('IncommingEvent', workerData);
        // port.postMessage('[WORKER] Shared worker onmessage established');

        const initiatePendingEvents = () => pendingEvents.forEach((p) => ws.send(JSON.stringify(p)));

        switch (workerData.connection) {
            case "init": {
                ws.onopen = (e) => {
                    // port.postMessage('[SOCKET] Connection established');
                    initiatePendingEvents();
                };

                ws.onmessage = (event) => {
                    processTickerEvent(event.data);
                    // port.postMessage(processTickerEvent(event.data));
                    // port.postMessage(event.data);
                };

                ws.onclose = (event) => {
                    if (event.wasClean) {
                        // console.log(`[close] Connection closed cleanly, code=${event.code}`);
                        // port.postMessage(
                        //     `[SOCKET] Connection closed cleanly, code=${event.code}`,
                        // );
                    } else {
                        // console.log('[close] Connection died');
                        // port.postMessage('[SOCKET] Connection died');
                    }
                };
                ws.onerror = (error) => {
                    // console.log(`[error] ${error.message}`);
                    // port.postMessage(`[SOCKET] ${error.message}`);
                    ws.close();
                };
                break;
            }
            case "stop":
                ws.close();
                pendingEvents.length = 0;
                break;

            default:
                break;
        }
        if (ws?.readyState !== 1 && workerData.event) {
            pendingEvents.push(workerData);
            return;
        }
        switch (workerData.event) {
            case "subscribe":
            case "unsubscribe":
                ws.send(JSON.stringify(workerData));
                break;
            default:
                break;
        }
    };
};
