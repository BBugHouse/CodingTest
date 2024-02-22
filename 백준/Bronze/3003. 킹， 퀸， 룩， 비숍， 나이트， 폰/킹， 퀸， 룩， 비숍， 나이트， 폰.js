const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();
const origin = [1, 1, 2, 2, 2, 8];
console.log(
  input
    .split(' ')
    .map((v, i) => origin[i] - Number(v))
    .join(' '),
);
