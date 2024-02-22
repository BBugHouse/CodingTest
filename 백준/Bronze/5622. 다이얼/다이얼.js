const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();
const alphabets = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
console.log(
  input.split('').reduce((pv, cc) => {
    for (const key in alphabets) {
      if (key.includes(cc)) {
        return pv + alphabets[key];
      }
    }
  }, 0),
);
