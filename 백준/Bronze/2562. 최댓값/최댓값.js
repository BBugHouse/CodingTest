const fs = require('fs');
const nums = fs.readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);
const max = Math.max(...nums);
console.log(max, nums.indexOf(max) + 1);