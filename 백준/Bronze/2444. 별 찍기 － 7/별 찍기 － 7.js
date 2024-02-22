const fs = require('fs');
const n = +fs.readFileSync('./dev/stdin').toString().trim();
let answer = [];
for (let i = 1; i <= n; i++) {
  answer.push(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
}
for (let i = n - 1; i >= 1; i--) {
  answer.push(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
}
console.log(answer.join('\n'));
