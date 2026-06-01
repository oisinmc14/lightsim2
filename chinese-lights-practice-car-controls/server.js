const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

const root = __dirname;
const port = 8080;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mp3": "audio/mpeg",
};

function getLocalAddress() {
  const networks = os.networkInterfaces();
  for (const entries of Object.values(networks)) {
    for (const entry of entries || []) {
      if (entry.family === "IPv4" && !entry.internal) {
        return entry.address;
      }
    }
  }
  return "localhost";
}

const server = http.createServer((req, res) => {
  const cleanUrl = decodeURIComponent(req.url.split("?")[0]);
  const requested = cleanUrl === "/" ? "/index.html" : cleanUrl;
  const filePath = path.normalize(path.join(root, requested));

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
});

server.listen(port, "0.0.0.0", () => {
  const address = getLocalAddress();
  console.log(`Practice app running:`);
  console.log(`Computer: http://localhost:${port}`);
  console.log(`Phone on same Wi-Fi: http://${address}:${port}`);
});
