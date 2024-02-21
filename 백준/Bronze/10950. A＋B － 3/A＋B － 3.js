const fs = require('fs');
const [n, ...input] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
input.forEach(str => {
  const [a, b] = str.split(' ').map(Number);
  console.log(a + b)
})