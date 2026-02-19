const http = require('http');

http.createServer((req, res) => {
res.write("Hello from DEV Branch - NodeJS App");
res.end();
}).listen(3000);
{
  "name": "node-app",
  "version": "1.0.0",
  "main": "index.js"
}
FROM node:18
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]


