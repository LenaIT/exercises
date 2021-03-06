'use strict';

let scoreOneA = 89;
let scoreTwoA = 120;
let scoreThreeA = 103;

let scoreOneL = 116;
let scoreTwoL = 94
let scoreThreeL = 123;

//a
let averageA = (scoreOneA + scoreTwoA + scoreThreeA) / 3;
let averageL = (scoreOneL + scoreTwoL + scoreThreeL) / 3;
console.log(`The average score for Aleeza\'s team is ${averageA}; for Lis\'s team is ${averageL}`);

//b, c
if (averageA > averageL) {
    console.log(`Aleeza\'s team is a winner, their score in average is ${averageA}`);
} else if (averageA < averageL) {
    console.log(`Lis\'s team is a winner, their score in average is ${averageL}`);
} else {
    console.log(`Teams finished three games with the same average score ${averageA}`);
}

//d, e
let scoreOneM = 97;
let scoreTwoM = 134;
let scoreThreeM = 105;

let averageM = (scoreOneM + scoreTwoM + scoreThreeM) / 3;
console.log(`The average score for Mary\'s team is ${averageM}`);

if (averageA > averageL && averageA > averageM) {
    console.log(`Aleeza\'s team is a winner, their score in average is ${averageA}`);
} else if (averageL > averageA && averageL > averageM) {
    console.log(`Lis\'s team is a winner, their score in average is ${averageL}`);
} else if (averageM > averageA && averageM > averageL) {
    console.log(`Mary\'s team is a winner, their score in average is ${averageM}`);
} else if (averageA === averageL) {
    console.log(`Draw between A and L teams with average ${averageA}`);
} else if (averageL === averageM) {
    console.log(`Draw between M and L teams with average ${averageM}`);
} else if (averageA === averageM) {
    console.log(`Draw between M and A teams with average ${averageM}`);
} else {
    console.log(`Teams finished three games with the same average score ${averageA}`);
}



//refactoring
let aAverageScore = (89 + 120 + 103) / 3;
let lAverageScore = (116 + 94 + 123) / 3;
let mAverageScore = (97 + 134 + 105) / 3;
console.log(`Average score of Aleez\'s team is ${aAverageScore}; of Lis\'s team ${lAverageScore}  and for Mary\'s team ${mAverageScore}`);

if (aAverageScore > lAverageScore && aAverageScore > mAverageScore) {
    console.log(`Aleeza\'s team is a winner, their score in average is ${aAverageScore}`);
} else if (lAverageScore > aAverageScore && lAverageScore > mAverageScore) {
    console.log(`Lis\'s team is a winner, their score in average is ${lAverageScore}`);
} else if (mAverageScore > aAverageScore && mAverageScore > lAverageScore) {
    console.log(`Mary\'s team is a winner, their score in average is ${mAverageScore}`);
} else if (aAverageScore === lAverageScore) {
    console.log(`Teams of Mary and Aleeza are both winners with a draw`);
} else if (lAverageScore === mAverageScore) {
    console.log(`Teams of Lisa and Mary are both winners with a draw`);
} else if (aAverageScore === mAverageScore) {
    console.log(`Teams of Aleeza and Mary are both winners with a draw`);
} else {
    console.log(`Teams finished three games with the same average score ${averageA}`);
}