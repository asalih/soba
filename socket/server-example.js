var net = require("net");

var server = net.createServer(function (client) {
    client.on('data', function (incoming) {
        console.log(incoming.toString());

        client.write("socket response from: " + process.env.sid)
    });
    client.setTimeout(5000);
});

server.listen(process.env.port);