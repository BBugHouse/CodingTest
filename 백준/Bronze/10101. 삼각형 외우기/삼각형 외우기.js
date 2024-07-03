const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const sum = input.reduce((a, c) => a + c, 0);

if (sum !== 180) {
  console.log('Error');
} else {
  const size = new Set(input).size;
  if (size === 1) {
    console.log('Equilateral');
  } else if (size === 2) {
    console.log('Isosceles');
  } else if (size === 3) {
    console.log('Scalene');
  }
}
