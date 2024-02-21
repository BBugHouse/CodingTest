const fs = require('fs');
const n = parseInt(+fs.readFileSync('./dev/stdin').toString().trim() / 4);
console.log('long '.repeat(n) + 'int');