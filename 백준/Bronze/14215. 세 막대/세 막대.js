const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const sum = input[0] + input[1];

console.log((sum <= input[2] ? sum - 1 : input[2]) + sum);
