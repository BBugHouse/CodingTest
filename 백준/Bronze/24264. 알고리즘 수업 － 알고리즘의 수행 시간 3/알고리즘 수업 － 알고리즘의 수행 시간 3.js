const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim();

console.log(input ** 2);
console.log(2);
