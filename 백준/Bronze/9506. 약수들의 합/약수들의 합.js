const fs = require('fs');
const data = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
data.pop();

data.forEach((datum) => {
  const divisors = Array(+datum)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((i) => +datum % i == 0);
  divisors.pop();
  const sum = divisors.reduce((pv, cv) => pv + cv, 0);
  if (sum == +datum) {
    console.log(`${+datum} = ${divisors.join(' + ')}`);
  } else {
    console.log(`${+datum} is NOT perfect.`);
  }
});
