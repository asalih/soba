START node ../app.js
timeout 3
SET SID=1
SET PORT=1667
START node ../socket/server-example.js
SET SID=2
SET PORT=1668
START node ../socket/server-example.js
SET SID=3
SET PORT=1669
START node ../socket/server-example.js
START node ../socket/client-example.js
START node ../socket/client-example.js
START node ../socket/client-example.js
START node ../socket/client-example.js
START node ../socket/client-example.js
START node ../socket/client-example.js