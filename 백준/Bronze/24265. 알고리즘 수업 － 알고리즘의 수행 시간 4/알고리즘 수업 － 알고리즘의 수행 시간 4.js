const fs = require('fs');
const n = fs.readFileSync('./dev/stdin').toString().trim();

console.log(((n - 1) * n) / 2);
console.log(2);
