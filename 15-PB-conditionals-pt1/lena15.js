'use strict';

//1 
let intOne = 127;
let intTwo = 68;

if ((intOne >= 50) && (intOne <= 99) || (intTwo >= 50) && (intTwo <= 99)) {
    console.log(`true, one or both variables are in the range 50 to 99`);
} else {
    console.log(false);
}

//if((50 <= intOne <= 99) || (50 <= intTwo <= 99)) 

//2
let intThree = 155;

if ((intOne >= 50) && (intOne <= 99) || (intTwo >= 50) && (intTwo <= 99) || (intThree >= 50) && (intThree <= 99)) {
    console.log(`true, one or more variables are in the range 50 to 99`);
} else {
    console.log(false);
}

//3
let a = 3;
let b = 17;
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

if (newString.substring(0, 2) === "py") {
    console.log(newString);
} else {
    console.log(`py${newString}`);
}

//console.log(newString.startsWith('py'));    

//5
let variableOne = 35;
let variableTwo = 65;
let sumVariables = variableOne + variableTwo;

if (sumVariables >= 50 && sumVariables <= 80) {
    console.log(65);
} else {
    console.log(80);
}

//6
let myNumber = 5;
let myNumberTwo = 3;

if ((myNumber + myNumberTwo === 8) || (myNumber - myNumberTwo === 8)) {
    console.log(true);
} else {
    console.log(false);
}

//7

let taskSeven = 12;
let taskSevenTwo = 7;

if (taskSeven === 15 || taskSevenTwo === 15 || (taskSeven + taskSevenTwo) === 15) {
    console.log(true);
} else {
    console.log(false);
}

//8
let numberMod = 65;
let numberModTwo = 21;

if (numberMod % 7 === 0 || numberMod % 11 === 0) {
    console.log(true);
} else if (numberModTwo % 7 === 0 || numberModTwo % 11 === 0) {
    console.log(true);
} else {
    console.log(false);
}

//if(!((numberMod % 7) || (numberMod % 11) || (numberModTwo % 7) || (numberModTwo % 11)))

//9
let numberNine = 3;
let NumberNineTwo = 3;
let sum = numberNine + NumberNineTwo;

if (numberNine === NumberNineTwo) {
    console.log(sum * 3);
} else {
    console.log(`numbers are not the same`);
}

//10
let numberTen = 30;
let numberTenTwo = 19;
let differ = numberTen - numberTenTwo;

if (numberTen > 19) {
    console.log(differ * 2);
} else {
    console.log(`specified number is less than 19`);
}

//11
let firstName = "Maria";
let age = 25;

if (age < 13) {
    console.log(`${firstName} is a child`);
} else if ((age >= 13) && (age < 20)) {
    console.log(`${firstName} is a teenager`);
} else if ((age >= 20) && (age < 30)) {
    console.log(`${firstName} is a young adult`);
} else {
    console.log(`${firstName} is an adult`);
}