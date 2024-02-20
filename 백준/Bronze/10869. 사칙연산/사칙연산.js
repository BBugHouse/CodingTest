const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split(' ');
const [a, b] = [Number(input[0]), Number(input[1])]
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);