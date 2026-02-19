const http = require('http');

http.createServer((req, res) => {
res.write("Hello from DEV Branch - NodeJS App");
res.end();
}).listen(3000);

