var net = require("net");

var socket = new net.Socket();
const SID = process.env.SID;

const port = 1557;
const ip = "127.0.0.1";

socket.connect(port, ip, function () {
    console.log('Connected');
});

socket.on('data', function (data) {
    
    var req = JSON.parse(data);
    console.log(req.data.toString());

    req.data = "response from: " + SID;
    socket.write(JSON.stringify(req));
});

socket.on('close', function () {
    console.log('Connection closed');
});

