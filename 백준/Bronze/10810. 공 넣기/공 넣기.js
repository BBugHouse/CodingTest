const fs = require('fs');
const [data, ...input] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const arr = Array(+data.split(' ')[0]).fill(0);
input.forEach(v => {
  const [i, j, k] = v.split(' ').map(Number);
  for (let l = i - 1; l < j; l++) {
    arr[l] = k;
  }
})
console.log(arr.join(' '));