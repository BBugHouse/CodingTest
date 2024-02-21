const fs = require('fs');
const n = +fs.readFileSync('./dev/stdin').toString().trim();
let res = 0;
for (let i = 1; i <= n; i++) res += i;
console.log(res);