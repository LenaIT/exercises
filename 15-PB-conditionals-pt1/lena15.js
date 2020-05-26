'use strict';

//1 
let intOne = 7;
let intTwo = 100;

if (((intOne >= 50) && (intOne <= 99)) || ((intTwo >= 50) && (intTwo <= 99))) {
    console.log(`true, one or both variables are in the range 50 to 99`);
} else {
    console.log(false);
}

//if (50<= intOne <=99)
//2
let intThree = 55;

if ((intOne >= 50) && (intOne <= 99)) {
    console.log(`true, one or more variables are in the range 50 to 99`);
} else if ((intTwo >= 50) && (intTwo <= 100)) {
    console.log(`true, one or more variables are in the range 50 to 99`);
} else if ((intThree >= 50) && (intThree <= 99)) {
    console.log(`true, one or more variables are in the range 50 to 99`);
} else {
    console.log(false);
}

//a shorter variant
if (((intOne >= 50) && (intOne <= 100)) || ((intTwo >= 50) && (intTwo <= 100)) || ((intThree >= 50) && (intThree <= 100))) {
    console.log(`true, one or more variables are in the range 50 to 99`);
} else {
    console.log(false);
}

//3
let a = 3;
let b = 7;
let c = 25;

if ((a > b) && (a > c)) {
    console.log(`${a} is the biggest number`);
} else if ((b > a) && (b > c)) {
    console.log(`${b} is the biggest number`);
} else {
    console.log(`${c} is the biggest number`);
}

//4
let newString = "thon";

if ((newString.substring(0, 2)) === "py") {
    console.log(newString);
} else {
    console.log(`py${newString}`);
}

//5
let variableOne = 35;
let variableTwo = 65;

if (((variableOne + variableTwo) >= 50) && ((variableOne + variableTwo) <= 80)) {
    console.log(65);
} else {
    console.log(80);
}

//6
let myNumber = 5;
let myNumberTwo = 3;

if (((myNumber + myNumberTwo) === 8) || ((myNumber - myNumberTwo) === 8)) {
    console.log(true);
} else {
    console.log(false);
}

//7

let taskSeven = 12;
let taskSevenTwo = 7;

if (((taskSeven === 15) || (taskSevenTwo === 15)) || ((taskSeven + taskSevenTwo) === 15)) {
    console.log(true);
} else {
    console.log(false);
}

//8
let numberMod = 65;
let numberModTwo = 21;

if ((numberMod % 7 === 0) || (numberMod % 11 === 0)) {
    console.log(true);
} else if ((numberModTwo % 7 === 0) || (numberModTow % 11 === 0)) {
    console.log(true);
} else {
    console.log(false);
}

//9