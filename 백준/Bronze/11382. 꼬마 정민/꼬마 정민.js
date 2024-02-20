const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');
console.log(input.reduce((pv, cv) => pv + +cv, 0));