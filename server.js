// 零依赖静态文件服务器，用于本地预览。支持 --port / --host 参数。
const http = require("http");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
function arg(name, dflt) {
  const i = args.findIndex(a => a === `--${name}`);
  if (i >= 0 && args[i + 1]) return args[i + 1];
  const kv = args.find(a => a.startsWith(`--${name}=`));
  return kv ? kv.split("=")[1] : dflt;
}
const PORT = parseInt(arg("port", "7100"), 10);
const HOST = arg("host", "127.0.0.1");
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".md": "text/markdown; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".png": "image/png",
  ".svg": "image/svg+xml", ".ico": "image/x-icon",
};

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  const file = path.join(ROOT, path.normalize(p).replace(/^([/\\])+/, ""));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end("404"); }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, HOST, () => console.log(`预览：http://${HOST}:${PORT}/`));
