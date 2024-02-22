const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();
console.log(input.split('').reduce((pv, cc) => pv + getDialWaitTime(cc), 0));
function getDialWaitTime(str) {
  let res = 0;
  switch (str) {
    case 'A':
    case 'B':
    case 'C':
      res = 3;
      break;
    case 'D':
    case 'E':
    case 'F':
      res = 4;
      break;
    case 'G':
    case 'H':
    case 'I':
      res = 5;
      break;
    case 'J':
    case 'K':
    case 'L':
      res = 6;
      break;
    case 'M':
    case 'N':
    case 'O':
      res = 7;
      break;
    case 'P':
    case 'Q':
    case 'R':
    case 'S':
      res = 8;
      break;
    case 'T':
    case 'U':
    case 'V':
      res = 9;
      break;
    case 'W':
    case 'X':
    case 'Y':
    case 'Z':
      res = 10;
      break;
  }
  return res;
}
