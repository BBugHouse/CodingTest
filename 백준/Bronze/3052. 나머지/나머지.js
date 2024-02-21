const fs = require('fs');
console.log([...new Set(fs.readFileSync('./dev/stdin').toString().trim().split('\n').map(v => +v % 42))].length);