const fs = require('fs');
const nums = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')[1]
  .split('')
  .map(Number);
console.log(nums.reduce((pv, cc) => pv + cc, 0));
