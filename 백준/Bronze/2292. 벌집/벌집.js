const fs = require('fs');
const n = fs.readFileSync('./dev/stdin').toString().trim();

console.log(
  Math.ceil(((12 * (n - 1) + 9) ** 0.5 - 3) / 6) + 1,
);
