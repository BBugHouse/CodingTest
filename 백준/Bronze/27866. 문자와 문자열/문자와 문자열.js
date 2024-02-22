const fs = require('fs');
const [str, idx] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
console.log(str[idx - 1]);