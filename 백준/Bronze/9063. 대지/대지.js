const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');

const x = [];
const y = [];

input.forEach((el) => {
  const [a, b] = el.split(' ').map(Number);
  x.push(a);
  y.push(b);
});

console.log(
  (Math.max(...x) - Math.min(...x)) *
    (Math.max(...y) - Math.min(...y))
);
