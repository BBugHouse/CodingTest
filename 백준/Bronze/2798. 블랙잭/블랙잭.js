const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const [n, m] = input[0];

const sums = [];
const nums = input[1].sort((a, b) => a - b);

for (let i = 1; i <= n - 2; i++) {
  for (let j = i + 1; j <= n - 1; j++) {
    for (let k = j + 1; k <= n; k++) {
      sums.push(nums[i - 1] + nums[j - 1] + nums[k - 1]);
    }
  }
}

console.log(
  sums.sort((a, b) => b - a).filter((e) => e <= m)[0]
);
