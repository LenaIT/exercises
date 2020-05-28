'use strict';

let scoreOneA = 89;
let scoreTwoA = 120;
let scoreThreeA = 103;

let scoreOneL = 116;
let scoreTwoL = 94
let scoreThreeL = 123;

//a
let averageA = (scoreOneA + scoreTwoA + scoreTwoA) / 3;
let averageL = (scoreOneL + scoreTwoL + scoreTwoL) / 3;
console.log(`The average score for Aleeza\'s team is ${averageA}; for Lis\'s team is ${averageL}`);

//b, c
if (averageA > averageL) {
    console.log(`Aleeza\'s team is a winner, their score in average is ${averageA}`);
} else if (averageA < averageL) {
    console.log(`Lis\'s team is a winner, their score in average is ${averageL}`);
} else if (averageA === averageL) {
    console.log(`Teams finished three games with the same average score ${averageA}`);
}

//d, e
let scoreOneM = 97;
let scoreTwoM = 134;
let scoreThreeM = 105;

let averageM = (scoreOneM + scoreTwoM + scoreTwoM) / 3;
console.log(`The average score for Mary\'s team is ${averageM}`);

if (averageA > averageL && averageA > averageM) {
    console.log(`Aleeza\'s team is a winner, their score in average is ${averageA}`);
} else if (averageL > averageA && averageL > averageM) {
    console.log(`Lis\'s team is a winner, their score in average is ${averageL}`);
} else if (averageM > averageA && averageM > averageL) {
    console.log(`Mary\'s team is a winner, their score in average is ${averageM}`);
} else if (averageA === averageL === averageM) {
    console.log(`Teams finished three games with the same average score ${averageA}`);
}