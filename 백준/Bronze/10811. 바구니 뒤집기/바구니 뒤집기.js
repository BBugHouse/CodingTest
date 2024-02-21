const fs = require('fs');
const [data, ...input] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let arr = Array(+data.split(' ')[0]).fill(0).map((_, i) => i + 1);
input.forEach(v => {
  const [i, j] = v.split(' ').map(Number);
  const reverse = arr.slice(i - 1, j).reverse();
  reverse.forEach((v, i2) => arr[i - 1 + i2] = v)
});
console.log(arr.join(' '));