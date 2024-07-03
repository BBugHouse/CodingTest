const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');

const x = [];
const y = [];

input.forEach((el) => {
  const [a, b] = el.split(' ').map(Number);
  if (x.includes(a)) {
    x.splice(x.indexOf(a), 1);
  } else {
    x.push(a);
  }
  if (y.includes(b)) {
    y.splice(y.indexOf(b), 1);
  } else {
    y.push(b);
  }
});

console.log(x[0], y[0]);
