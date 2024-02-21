const fs = require('fs');
const [_, ...input] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let answer = [];
input.forEach((v, i) => {
  const [a, b] = v.split(' ').map(Number);
  answer.push(`Case #${i + 1}: ${a} + ${b} = ${a + b}`);
})
console.log(answer.join('\n'));