const fs = require('fs');
const [_, input] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const nums = input.split(' ').map(Number);
console.log(Math.min(...nums), Math.max(...nums))