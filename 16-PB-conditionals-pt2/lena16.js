'use strict';

//1
let markHeight = 1.70;
let markWeight = 90;

let johnHeight = 1.85;
let johnWeight = 98;

//2
let markBMI = markWeight / Math.pow(markHeight, 2); //31, 14
let johnBMI = johnWeight / Math.pow(johnHeight, 2); //28, 63

console.log(markBMI.toFixed(2), johnBMI.toFixed(2));

//3
let isBiggerBMI = markBMI > johnBMI;
console.log(isBiggerBMI);

//4
console.log(`Is Mark\'s BMI higher than John\'s? Why yes, it's ${isBiggerBMI}, it is`);

//5
if (markBMI > johnBMI) {
    console.log(`Mark\ 's BMI is ${markBMI.toFixed(2)} and it is bigger than John\'s`);
} else {
    console.log(`John\'s BMI is ${johnBMI.toFixed(2)} and it is bigger than Mark\'s`);
}