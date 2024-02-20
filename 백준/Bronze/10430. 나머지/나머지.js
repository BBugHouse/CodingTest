const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');
const [a, b, c] = [parseInt(input[0]), parseInt(input[1]), parseInt(input[2])];
console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);