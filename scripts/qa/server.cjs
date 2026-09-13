/* eslint-disable @typescript-eslint/no-require-imports -- Node audit utilities use CommonJS. */
const http = require("http"),
  fs = require("fs"),
  path = require("path"),
  zlib = require("zlib");
const base = path.resolve(process.argv[2] || "out");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".mp4": "video/mp4",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};
http
  .createServer((req, res) => {
    let route = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    let file = path.resolve(base, "." + route);
    if (!file.startsWith(base + "/") && file !== base) {
      res.writeHead(403).end();
      return;
    }
    try {
      if (fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
      const raw = fs.readFileSync(file),
        ext = path.extname(file);
      const gzip =
        /gzip/.test(req.headers["accept-encoding"] || "") &&
        [".html", ".css", ".js", ".json", ".svg"].includes(ext);
      const data = gzip ? zlib.gzipSync(raw) : raw;
      res.writeHead(200, {
        "Content-Type": types[ext] || "application/octet-stream",
        "Content-Length": data.length,
        "Cache-Control": "public,max-age=86400",
        ...(gzip
          ? { "Content-Encoding": "gzip", Vary: "Accept-Encoding" }
          : {}),
      });
      res.end(data);
    } catch {
      res.writeHead(404).end();
    }
  })
  .listen(Number(process.argv[3] || 4174), "127.0.0.1");
