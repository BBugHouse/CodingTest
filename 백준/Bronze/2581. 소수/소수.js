const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');

const primes = [];

const isPrime = (num) => {
  const divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length === 2;
};

for (let i = +input[0]; i <= input[1]; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

if (primes.length === 0) {
  console.log(-1);
} else {
  console.log(primes.reduce((acc, cur) => acc + cur, 0));
  console.log(primes[0]);
}
