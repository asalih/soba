START node ../app.js
timeout 3
SET SID=1
SET PORT=1557
START node ../http/server-example.js
SET SID=2
SET PORT=1558
START node ../http/server-example.js
SET SID=3
SET PORT=1559
START node ../http/server-example.js
START node ../http/client-example.js
START node ../http/client-example.js
START node ../http/client-example.js
START node ../http/client-example.js
START node ../http/client-example.js
START node ../http/client-example.js