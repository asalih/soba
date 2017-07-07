var net = require("net");

//client connects to the balancer

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

setInterval(function () {
    client.write("client: " + rnd);
}, 1000 * rnd);