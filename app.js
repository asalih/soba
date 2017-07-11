var balancer = require("./balancer/balancer");

//http ports
balancer().start({
    servers: [{ port: 1557, ip: "127.0.0.1" }, { port: 1558, ip: "127.0.0.1" }, { port: 1559, ip: "127.0.0.1" }],
    port: 1447,
    clientTimeout: 5000
});

//socket ports
balancer().start({
    servers: [{ port: 1667, ip: "127.0.0.1" }, { port: 1668, ip: "127.0.0.1" }, { port: 1669, ip: "127.0.0.1" }],
    port: 1337,
    clientTimeout: 5000
});