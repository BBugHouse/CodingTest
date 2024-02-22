const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');
let answer = [];
input.forEach((v) => {
  const [num, str] = v.split(' ');
  let res = '';
  [...str].forEach((v2) => (res += v2.repeat(+num)));
  answer.push(res);
});
console.log(answer.join('\n'));
