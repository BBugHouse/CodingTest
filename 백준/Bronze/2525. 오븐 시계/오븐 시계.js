const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');
const time = input[0].split(' ');
const data = Number(input[1]);
let [h, m] = [Number(time[0]), Number(time[1])];
m += data;
h += parseInt(m / 60);
m %= 60;
h %= 24;
console.log(h, m)