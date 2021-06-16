const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome to my node js sever");
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server listening on port 5000");
});
