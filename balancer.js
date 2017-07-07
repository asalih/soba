var net = require("net");

const serverPort = 1557;
const clientPort = 1447;

var servers = [];
var request = 0;
var local = net.createServer(function (socket) {
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    servers.push(socket);

    socket.on('data', function (data) {
        var fromServer = JSON.parse(data);
        clients[fromServer.name].write(fromServer.data.toString());
    });

});
local.listen(serverPort);

var clients = [];
var server = net.createServer(function (socket) {
    socket.name = socket.remoteAddress + ":" + socket.remotePort;

    clients[socket.name] = socket;
    socket.on('data', function (incoming) {

        var server = servers[(request++) % servers.length];
        var data = JSON.stringify({ name: socket.name, data: incoming.toString() });
        server.write(data);
    });
    socket.on('close', function () {
        console.log('Connection closed');
    });
    socket.on("error", function (err) {
        if (err && err.code != "ECONNRESET")
            throw err;
    });
    socket.on("timeout", function (obj) {
        delete clients[socket.name];
    });
    socket.setTimeout(5000);
});

server.listen(clientPort);