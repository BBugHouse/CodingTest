const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().toUpperCase();
let answer = [];
[...input].forEach((v) => {
  if (!answer[v]) answer[v] = 0;
  answer[v]++;
});
const values = Object.values(answer);
const max = Math.max(...values);
let words = [];
for (let key in answer) {
  if (answer[key] === max) words.push(key);
}
console.log(words.length >= 2 ? '?' : words[0]);
