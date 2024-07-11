const fs = require('fs');
const input = +fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim();

let construct = 0;

for (let i = input; i > 0; i--) {
  const sum =
    i + [...String(i)].reduce((a, c) => +a + +c, 0);
  if (input == sum) construct = i;
}

console.log(construct);
