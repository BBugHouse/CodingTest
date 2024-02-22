const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();
console.log(
  +(JSON.stringify([...input]) === JSON.stringify([...input].reverse())),
);
