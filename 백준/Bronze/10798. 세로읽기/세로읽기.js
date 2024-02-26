const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const max = Math.max(...input.map((v) => v.length));
let answer = '';
for (let i = 0; i < max; i++) {
  input.forEach((v) => {
    if (!v.trim()[i]) return;
    answer += v.trim()[i];
  });
}
console.log(answer);
