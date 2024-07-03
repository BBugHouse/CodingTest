const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');
input.pop();
const result = [];
input.forEach((el) => {
  const lengths = el
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const size = new Set(lengths).size;
  if (lengths[0] + lengths[1] <= lengths[2]) {
    result.push('Invalid');
    return;
  }
  if (size === 1) {
    result.push('Equilateral');
  } else if (size === 2) {
    result.push('Isosceles');
  } else if (size === 3) {
    result.push('Scalene');
  }
});

console.log(result.join('\n'));
