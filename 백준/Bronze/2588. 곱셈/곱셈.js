const fs = require('fs');
const [num1, num2] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

for (let i = 2; i >= 0; i--) {
  console.log(num1 * num2[i]);
}
console.log(num1 * num2)