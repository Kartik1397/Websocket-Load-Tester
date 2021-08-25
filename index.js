const WebSocket = require('ws');
const URL = process.argv[3];
let error_count = 0;
let success_count = 0;
let connected_count = 0;
const content = '<p>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</p>';

for (let i = 0; i < Number(process.argv[2]); i++) {
    function open() {
        const ws = new WebSocket(URL);
	    // console.log(i);
        ws.on('open', () => {
            connected_count++;
            // setTimeout(() => {
            //     ws.close();
            //     setTimeout(() => {
            //         open();
            //     }, 1000);
            // }, 5000 + Math.random()*100000);
        });
        ws.on('message', function incoming(data) {
            const alert = JSON.parse(data);
            if (alert.message == content) {
                success_count++;
            } else {
                error_count++;
            }
        });
        ws.on('error', (err) => {
            error_count++;
            console.log('Error(ws): ' + error_count);
            console.log(err); 
        });
        ws.on('close', () => {
            console.log('Socket closed');
            connected_count--;
        });
    }
    open();
}

setInterval(() => {
    console.log('Success: ', success_count);
    console.log('Error: ', error_count);
    console.log('Connected: ', connected_count);
}, 1000);
