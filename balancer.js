var net = require("net");

/**
 * predefined consts
 * client-example.js connects to "clientport"
 * server-example.js connects to "serverPort"
 * inactivity for a client defined with "clientTimeout"
 */
const serverPort = 1557;
const clientPort = 1447;
const clientTimeout = 5000;

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
        delete clients[socket.name];
    });
    socket.on("error", function (err) {
        if (err && err.code != "ECONNRESET")
            throw err;
    });
    socket.on("timeout", function (obj) {
        delete clients[socket.name];
    });
    socket.setTimeout(clientTimeout);
});

server.listen(clientPort);