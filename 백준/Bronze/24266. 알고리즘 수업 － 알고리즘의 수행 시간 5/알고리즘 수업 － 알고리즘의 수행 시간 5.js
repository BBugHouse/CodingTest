const fs = require('fs');
const n = fs.readFileSync('./dev/stdin').toString().trim();

console.log((BigInt(n) ** 3n).toString());
console.log(3);
