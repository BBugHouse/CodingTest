const fs = require("fs");
const [n, ...strs] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(strs.map((v) => v[0] + v[v.length - 1]).join("\n"));
