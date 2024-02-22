const fs = require('fs');
const str = fs.readFileSync('./dev/stdin').toString().trim();
let arr = Array(26).fill(-1);
new Set(str).forEach((v) => {
  arr[v.charCodeAt() - 97] = str.indexOf(v);
});
console.log(arr.join(' '));
