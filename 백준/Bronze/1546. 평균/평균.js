const fs = require('fs');
const [_, input] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const nums = input.split(' ').map(Number);
const m = Math.max(...nums);
const sum = nums.map(v => v / m * 100).reduce((a, b) => a + b)
console.log((sum / nums.length).toFixed(2));