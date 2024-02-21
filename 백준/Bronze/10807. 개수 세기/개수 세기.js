const fs = require('fs');
const [_, nums, target] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
console.log(nums.split(' ').filter(e => e == target).length);