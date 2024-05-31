const fs = require('fs');
const [_, data] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

console.log(
  data
    .split(' ')
    .map(Number)
    .reduce((pv, cv) => {
      const mineral_water = Array(cv)
        .fill(0)
        .map((_, i) => i + 1)
        .filter((i) => cv % i == 0);
      if (mineral_water.length == 2) {
        return pv + 1;
      }
      return pv;
    }, 0),
);
