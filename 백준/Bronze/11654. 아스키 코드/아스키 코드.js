const fs = require("fs");
const str = fs.readFileSync("./dev/stdin").toString().trim();
console.log(str.charCodeAt());
