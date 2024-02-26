const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const nums = input.map((v) => v.split(' ').map(Number));
let answer = -1;
let pos = [0, 0];
for (let i = 0; i < nums.length; i++) {
  const max = Math.max(...nums[i]);
  if (max > answer) {
    answer = max;
    pos = [i + 1, nums[i].indexOf(max) + 1];
  }
}
console.log(`${answer}\n${pos.join(' ')}`);
