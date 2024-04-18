const fs = require('fs');
let [a, b, v] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(Math.ceil((v - a) / (a - b)) + 1);
