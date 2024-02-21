const fs = require('fs');
const [price, _, ...input] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let total = 0;
input.forEach(str => {
  const [a, b] = str.split(' ').map(Number);
  total += a * b;
})
console.log(price == total ? 'Yes' : 'No');