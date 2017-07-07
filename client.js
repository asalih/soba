var net = require("net");

var client = new net.Socket();

client.connect(1447, "127.0.0.1", function () {
    console.log('Connected');
});

client.on('data', function (data) {
    console.log(data.toString());
});

client.on('close', function () {
    console.log('Connection closed');
});

var rnd = Math.random();
var test = 0;
setInterval(function () {
    if (test < 20) {
        client.write("client: " + rnd); test++
    }
}, 1000 * rnd);