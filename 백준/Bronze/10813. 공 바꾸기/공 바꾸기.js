const fs = require('fs');
const [data, ...input] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const arr = Array(+data.split(' ')[0]).fill(0).map((_, i) => i + 1);
input.forEach(v => {
  const [i, j] = v.split(' ').map(Number);
  [arr[i - 1], arr[j - 1]] = [arr[j - 1], arr[i - 1]];
})
console.log(arr.join(' '));