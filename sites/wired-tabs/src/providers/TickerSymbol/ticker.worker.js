const ports = [];
const getUid = () => (new Date().getTime()).toString(16);

const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

ws.onerror = (error) => ws.close();
ws.onclose = (event) => console.log("Closed WS connection");
ws.onopen = (e) => {
        console.log('opened');
}

self.onconnect = (e) => {
    const port = e.source;
    ports.push(port);

    const processTickerEvent = (p, dataStringified) => {
        const data = JSON.parse(dataStringified);
        if (Array.isArray(data)) {
            const [chanId, values] = data;
            if (values !== "hb") {
                const [bid, bidSize, ask, askSize, dailyChange, dailyChangeRelative, lastPrice, volume, high, low] = values;
                return p.postMessage({
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
            if(data.msg === 'subscribe: dup'){
                return p.postMessage({...data, event: 'subscribed'});
            }
        } else {
            return p.postMessage(data);
        }
    };
    
    const i = setInterval(() => {
        if(ws.readyState === 1){
            console.log('created');
            port.postMessage({isReady: true});

            ws.onmessage = e => {
                ports.forEach(p => processTickerEvent(p, e.data));
            }
            port.onmessage = (event) => {
                if(event.data){
                    ws.send(JSON.stringify(event.data));
                }
            };
            clearInterval(i);
        }
    }, 5);
    
};
