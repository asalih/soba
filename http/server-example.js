var http = require("http");

http.createServer((req, res) => {
    console.log("incoming req")
    res.write("ok from " + process.env.sid);
    res.end();
}).listen(process.env.port);

