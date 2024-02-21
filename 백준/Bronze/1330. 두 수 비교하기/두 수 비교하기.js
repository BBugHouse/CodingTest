const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split(' ');
const [a, b] = [Number(input[0]), Number(input[1])];
if (a > b) console.log('>')
else if (a < b) console.log('<')
else if (a == b) console.log('==')