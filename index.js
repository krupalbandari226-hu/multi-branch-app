const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.write("Hello from DEV Branch - NodeJS App");
  res.end();
}).listen(PORT, () => console.log(`Server running on port ${PORT}`));
