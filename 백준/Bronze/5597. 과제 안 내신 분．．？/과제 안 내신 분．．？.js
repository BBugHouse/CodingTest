const fs = require('fs');
const nums = fs.readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);
const arr = Array(30).fill(0).map((_, i) => i + 1);
console.log(arr.filter(v => !nums.includes(v)).join('\n'));