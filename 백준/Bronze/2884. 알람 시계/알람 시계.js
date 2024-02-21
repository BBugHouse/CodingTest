const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split(' ');
let [h, m] = [Number(input[0]), Number(input[1])];
m -= 45;
if (m < 0) {
  m += 60;
  h--
  if (h < 0) {
    h += 24;
  }
}
console.log(h, m)