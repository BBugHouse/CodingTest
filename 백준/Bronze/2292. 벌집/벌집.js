const fs = require('fs');
const n = fs.readFileSync('./dev/stdin').toString().trim();

let i = 1;
let num = 1;
while (n > num) {
  num += 6 * i;
  i++;
}

console.log(i);
