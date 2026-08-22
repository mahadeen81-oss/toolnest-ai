import { createServer } from "node:http";

const port = Number(process.env.PORT || 3000);

const server = createServer((_request, response) => {
  response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  response.end("Your Node.js project is ready.\n");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Node.js server listening on port ${port}`);
});