const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().toUpperCase();
const set = new Set(input);
let answer = [];
const arr = [...input];
set.forEach((v) => {
  let length = 0;
  arr.forEach((v2) => {
    if (v == v2) length++;
  });
  if (!answer[length]) answer[length] = [];
  answer[length].push(v);
});
const max = Math.max(...Object.keys(answer).map(Number));
console.log(answer[max].length >= 2 ? '?' : answer[max][0]);
