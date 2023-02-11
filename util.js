const fs = require("fs");
const path = require("path");

const serverDir = "server";
const finalDir = "apps-script";
const distDir = "dist";
const htmlFile = "index.html";

fs.copyFileSync(
  path.resolve(__dirname, distDir, htmlFile),
  path.resolve(__dirname, finalDir, htmlFile)
);
const dir = fs.readdirSync(path.resolve(__dirname, serverDir));
dir.forEach((f) => {
  fs.copyFileSync(
    path.resolve(__dirname, serverDir, f),
    path.resolve(__dirname, finalDir, f)
  );
});
