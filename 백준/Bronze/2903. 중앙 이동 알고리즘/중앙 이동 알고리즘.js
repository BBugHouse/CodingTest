const fs = require('fs');
let n = fs.readFileSync('./dev/stdin').toString().trim();

let answer = 2;

for (let i = 0; i < n; i++) {
  answer += 2 ** i;
}

console.log(answer ** 2);
