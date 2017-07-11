var balancer = require("./balancer/balancer");

balancer.start({
    servers: [{ port: 1557, ip: "127.0.0.1" }, { port: 1558, ip: "127.0.0.1" }, { port: 1559, ip: "127.0.0.1" }],
    port: 1447,
    clientTimeout: 5000
})