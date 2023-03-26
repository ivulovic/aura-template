const ports = [];
const pendingEvents = {};
const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

const getUid = () => (new Date().getTime()).toString(36);

self.onconnect = function (e) {
    const id = getUid();
    const port = e.source;
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
        if (data.event === 'error') {
            console.log(data)
            if(data.msg === 'subscribe: dup'){
                port.postMessage({...data, event: 'subscribed'});
            }
        } else {
            port.postMessage(data);
        }
    };

    port.onmessage = (event) => {
        const workerData = event.data;

        // const initiatePendingEvents = () => (pendingEvents[id] || []).forEach((p) => ws.send(JSON.stringify(p), e=>console.error(e)));

        switch (workerData.connection) {
            case "init": {
                // ws.onopen = (e) => initiatePendingEvents();
                ws.onmessage = (event) => processTickerEvent(event.data)
                ws.onerror = (error) => ws.close();
                ws.onclose = (event) => {};
                break;
            }
            case "stop":{
                pendingEvents[id] = [];
            }
                break;

            default:
                break;
        }
        if (ws?.readyState !== 1 && workerData.event) {
            pendingEvents[id] = [...(pendingEvents[id] || []), workerData];
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

const i = setInterval(() => {
    if(ws.readyState === 1){
        const allEvents = Object.values(pendingEvents);
        allEvents.map(actions => actions.map(action => ws.send(JSON.stringify(action))));
        clearInterval(i);
    }
}, 5);