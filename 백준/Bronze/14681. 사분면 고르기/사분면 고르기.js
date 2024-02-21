const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const [x, y] = [Number(input[0]), Number(input[1])];
  if (x > 0) console.log(y > 0 ? 1 : 4);
  else console.log(y > 0 ? 2 : 3);
})