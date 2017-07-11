var net = require("net");


module.exports = (() => {
    this.balanceServer = {};
    var servers = [];
    var request = 0;
    var passRequest = (server, data, client) => {
        var socket = new net.Socket();
        socket.connect(server.port, server.ip, function () {
            socket.write(data);
        });
        socket.on('data', function (data) {
            client.write(data.toString());
        });
    };
    this.start = (options) => {
        servers = options.servers;
        this.balanceServer = net.createServer(function (client) {
            client.on('data', function (incoming) {
                var server = servers[(request++) % servers.length];
                passRequest(server, incoming, client);
            });
            client.on("error", function (err) {
                if (err && err.code != "ECONNRESET")
                    throw err;
            });
            client.setTimeout(options.clientTimeout);
        });

        this.balanceServer.listen(options.port);
    };

    return this;
});
