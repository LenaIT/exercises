"use strict";

//1
let myString = "Hello, I am your String from task one from exercise";
let myNumber = 9;
console.log(myString + " " + myNumber + ".");

/* In this case, what is the + operator doing?  - Two different values of two different variables will be shown in console in one line; when we add string and number data types, it converts data type number to data type string */

//2
let taskTwo = "1005";
console.log(taskTwo, typeof (taskTwo));
let numberType = parseInt(taskTwo);
console.log(numberType, typeof (numberType));

let floatString = "10.05";
console.log(floatString, typeof (floatString));
let floatNumber = parseFloat(floatString);
console.log(floatNumber, typeof (floatNumber));

//3
let firstNumber = 30;
let secondNumber = 939;
let thirdNumber = 40.9;

(firstNumber % 2 === 0) ? console.log(firstNumber + " is even"): console.log(firstNumber + " is odd");
(secondNumber % 2 === 0) ? console.log(secondNumber + " is even"): console.log(secondNumber + " is odd");
(thirdNumber % 2 === 0) ? console.log(thirdNumber + " is even"): console.log(thirdNumber + " is odd");