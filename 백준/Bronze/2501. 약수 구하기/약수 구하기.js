const fs = require('fs');
const [n, k] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const divisors = Array(n)
  .fill(1)
  .map((_, i) => i + 1)
  .filter((i) => n % i == 0);

console.log(divisors[k - 1] ?? 0);
