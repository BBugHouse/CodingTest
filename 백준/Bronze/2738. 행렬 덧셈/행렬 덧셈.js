const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
let answer = [];
for (let i = 0; i < n; i++) {
  let line = [];
  const nums = input[i]?.split(' ').map(Number);
  const nums2 = input[i + n]?.split(' ').map(Number);
  for (let j = 0; j < m; j++) {
    line.push(nums[j] + nums2[j]);
  }
  answer.push(line.join(' '));
}
console.log(answer.join('\n').trim());
