const fs = require('fs');
let [_, ...input] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');

const result = input.map((c) => {
  const answer = [];
  answer.push(parseInt(c / 25));
  c %= 25;
  answer.push(parseInt(c / 10));
  c %= 10;
  answer.push(parseInt(c / 5));
  c %= 5;
  answer.push(parseInt(c / 1));
  return answer.join(' ');
});

console.log(result.join('\n'));
