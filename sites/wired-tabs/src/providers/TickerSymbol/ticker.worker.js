const ports = [];

const getUid = () => (new Date().getTime()).toString(16);

self.onconnect = (e) => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
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
                    event: "ws",
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
            // if(data.msg === 'subscribe: dup'){
            //     port.postMessage({...data, event: 'subscribed'});
            // }
        } else {
            port.postMessage(data);
        }
    };

    ws.onerror = (error) => ws.close();
    ws.onclose = (event) => {};
    ws.onmessage = (event) => processTickerEvent(event.data);
    ws.onopen = (e) => {
        port.postMessage({isReady: true});
        port.onmessage = (event) => {
            if(event.data){
                ws.send(JSON.stringify(event.data));
            }
        };
    }
};
