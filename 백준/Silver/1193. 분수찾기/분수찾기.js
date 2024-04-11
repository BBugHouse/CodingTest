const fs = require('fs');
let n = +fs.readFileSync('./dev/stdin').toString();

let num = n;
let i = 1;
while (num - i > 0) {
  num -= i;
  i++;
}

console.log(
  i % 2 == 0
    ? `${num}/${i + 1 - num}`
    : `${i + 1 - num}/${num}`
);
