const fs = require('fs');
let n = fs.readFileSync('./dev/stdin').toString().trim();

console.log(4 ** n + 2 ** (+n + 1) + 1);
