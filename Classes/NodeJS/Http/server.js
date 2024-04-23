const http = require("http");

const server = http.createServer((req, res) => {
  // Handled here
  //req -> url, method (get, post, put, delete), header (metadata), body, queryParams
  // res -> status code, content-type
  console.log(req.url);
  console.log(req.method);
  //   res.setHeader("Content-type", "text/plain");
  //   res.write("Hello, world");

  //   // Set response header with Content-Type as text/html
  //   res.setHeader("Content-Type", "text/html");

  //   // Write HTML response
  //   res.write("<html><head><title>Node.js HTTP Server</title></head><body>");
  //   res.write("<h1>Hello, World!</h1><span>Testing content</span>");
  //   res.write("</body></html>");

  const responseData = {
    message: "Hello World",
    date: new Date(),
  };
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.write(JSON.stringify(responseData));
  res.end();
});

const port = 3000;
const host = "localhost"; // local, stage, prod

// server config
server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});

//Request
// http method, url
// header
// body or query parameters

// response
// response body & response status
