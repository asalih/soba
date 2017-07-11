START node ../app.js
timeout 2
SET SID=1
SET PORT=1557
START node ../http_example/server-example.js
SET SID=2
SET PORT=1558
START node ../http_example/server-example.js
SET SID=3
SET PORT=1559
START node ../http_example/server-example.js
START node ../http_example/client-example.js
START node ../http_example/client-example.js
START node ../http_example/client-example.js
START node ../http_example/client-example.js
SET SID=1
SET PORT=1667
START node ../socket_example/server-example.js
SET SID=2
SET PORT=1668
START node ../socket_example/server-example.js
SET SID=3
SET PORT=1669
START node ../socket_example/server-example.js
START node ../socket_example/client-example.js
START node ../socket_example/client-example.js
START node ../socket_example/client-example.js
START node ../socket_example/client-example.js
