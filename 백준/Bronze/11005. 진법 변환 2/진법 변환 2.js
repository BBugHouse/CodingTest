const fs = require('fs');
let [n, b] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const binary = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let result = '';

while (n) {
  result += binary[n % b];
  n = parseInt(n / b);
}

console.log([...result].reverse().join(''));
