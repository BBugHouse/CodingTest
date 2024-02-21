const fs = require('fs');
const [_, ...input] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let answer = [];
input.forEach(e => {
  const [a, b] = e.split(' ').map(Number);
  answer.push(a + b);
})
console.log(answer.join('\n'));