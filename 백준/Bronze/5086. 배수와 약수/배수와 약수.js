const fs = require('fs');
const data = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
data.pop();

data.forEach((datum) => {
  const [a, b] = datum.split(' ').map(Number);
  if (b % a == 0) {
    console.log('factor');
  } else if (a % b == 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }
});
