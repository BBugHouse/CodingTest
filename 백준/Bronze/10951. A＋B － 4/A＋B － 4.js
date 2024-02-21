const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let answer = [];
input.forEach(v => {
  const [a, b] = v.split(' ').map(Number);
  answer.push(a + b);
})
console.log(answer.join('\n'));