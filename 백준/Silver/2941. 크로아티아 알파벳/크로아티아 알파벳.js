const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();
let answer = 0;
answer += input.match(/c=|dz=|c=|lj|nj|s=|z=/g)?.length || 0;
answer +=
  input.replace(/c=|dz=|c=|lj|nj|s=|z=/g, '').match(/[a-z]/g)?.length || 0;
console.log(answer);
