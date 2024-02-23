const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');

let count = 0;
input.forEach((str) => {
  let group = true;
  let arr = [];
  [...str].forEach((s) => {
    if (arr.includes(s) && arr[arr.length - 1] != s) {
      group = false;
      return false;
    }
    arr.push(s);
  });
  if (group) count++;
});

console.log(count);
