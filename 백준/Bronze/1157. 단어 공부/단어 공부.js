const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().toUpperCase();
const set = new Set(input);
let answer = [];
set.forEach((v) => {
  const length = [...input].filter((v2) => v == v2).length;
  if (!answer[length]) answer[length] = [];
  answer[length].push(v);
});
const max = Math.max(...Object.keys(answer).map(Number));
console.log(answer[max].length >= 2 ? '?' : answer[max][0]);
