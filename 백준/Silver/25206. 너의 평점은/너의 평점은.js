const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let total_subscore = 0;
let total_score = 0;

const scoreList = {
  'A+': 4.5,
  A0: 4,
  'B+': 3.5,
  B0: 3,
  'C+': 2.5,
  C0: 2,
  'D+': 1.5,
  D0: 1,
  F: 0,
};

input.forEach((v) => {
  const [_, subscore, rank] = v.trim().split(' ');
  if (rank == 'P') return;
  total_score += Number(subscore);
  total_subscore += scoreList[rank] * Number(subscore);
});
console.log(total_subscore / total_score);
