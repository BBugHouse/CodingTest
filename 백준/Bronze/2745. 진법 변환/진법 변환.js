const fs = require('fs');
const [n, b] = fs.readFileSync('./dev/stdin').toString().trim().split(' ');
console.log(parseInt(n, +b));
