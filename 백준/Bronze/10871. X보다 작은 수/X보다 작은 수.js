const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const x = +input[0].split(' ')[1];
console.log(input[1].split(' ').filter(e => +e < x).join(' '));