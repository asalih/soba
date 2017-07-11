var net = require("net");

var servers = [];
var request = 0;
module.exports = (() => {
    this.balanceServer = {};
    var passRequest = function (server, data, client) {
        var socket = new net.Socket();
        socket.connect(server.port, server.ip, function () {
            socket.write(data);
        });
        socket.on('data', function (data) {
            client.write(data.toString());
        });
    };
    this.start = function(options) {
        servers = options.servers;
        this.balanceServer = net.createServer(function (client) {
            client.on('data', function (incoming) {
                var server = servers[(request++) % servers.length];
                passRequest(server, incoming, client);
            });
            client.setTimeout(options.clientTimeout);
        });

        this.balanceServer.listen(options.port);
    };

    return this;
})();

