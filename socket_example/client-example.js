var net = require("net");

//client connects to the balancer

var client = new net.Socket();

client.connect(1337, "127.0.0.1", function () {
    console.log('Connected');

    var rnd = Math.random();
    setInterval(() => {
        client.write("request from: " + rnd);
    }, 1000 * rnd);
});

client.on('data', function (data) {
    console.log(data.toString());
});

client.on('close', function () {
    console.log('Connection closed');
});
