const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.setHeader("Content-Type", "text/html");

  // Read the HTML file
  fs.readFile(path.join(__dirname, "large.html"), (err, content) => {
    if (err) {
      // If an error occurs, send a 500 response
      res.writeHead(500);
      res.end("Error loading the file");
    } else {
      // If the file is read successfully, send the content as the response
      res.writeHead(200);
      res.end(content);
    }
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
