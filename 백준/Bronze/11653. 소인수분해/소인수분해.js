const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');

let n = +input[0];
const primes = [];
if (n === 1) return;
w: while (true) {
  let a = false;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      n /= i;
      a = true;
      primes.push(i);
      break;
    }
  }
  if (!a) break w;
}

console.log(primes.join('\n'));
