const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');
let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Array(100).fill(0));
}
input.forEach((v) => {
  const [n, m] = v.split(' ').map(Number);
  for (let i = n - 1; i < n + 9; i++) {
    for (let j = m - 1; j < m + 9; j++) {
      arr[i][j] = 1;
    }
  }
});
const count = arr
  .map((v) => {
    return v.filter((v2) => v2).length;
  })
  .reduce((pv, cc) => pv + cc, 0);
console.log(count);
