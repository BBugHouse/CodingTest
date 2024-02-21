const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString();
const year = Number(input);
const is_leap_year = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
console.log(+is_leap_year);