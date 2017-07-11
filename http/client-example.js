var http = require("http");

var rnd = Math.random();
setInterval(() => {
    http.get("http://localhost:1447", function (res) {
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
            try {

                console.log(rawData);
            } catch (e) {
                console.log(e.message);
            }
        });
    });
}, 1000*rnd);
