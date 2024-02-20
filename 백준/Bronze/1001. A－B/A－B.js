const fs = require('fs');
const [a, b] = fs.readFileSync('./dev/stdin').toString().split(' ');
console.log(Number(a) - Number(b));