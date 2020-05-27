'use strict';

//1
let determiner = 5;
if (determiner < 0) {
    let x = -5;
    console.log(`Value x is less than 0 and is ${x}`);
} else {
    let x = 15;
    console.log(`Value x is greater or equal to 0 and is ${x}`);
}

//2
let updater = 8;
if (determiner >= 0) {
    updater = 12;
    let message = 3;
    console.log(`Positive Integer: ${message}`);
} else {
    updater = -12;
    console.log(updater);
}

//What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
// Will be an error (ReferenceError: message is not defined).Variable message is in block scope and we can use it only inside curly brackets, where it was declared

//3 When do you use a ternary v.s. an if statement? Give an example.
// In "if else" we can use more than one statement (if...else if...else if...else).So ternary only when we check one statement

//Example
let age = 15;
(age >= 18) ? console.log(`yes, you can drive a car`): console.log(`no, only bicycle`);


let agePerson = 50n;
if (agePerson <= 10) {
    console.log(`drive a child bicycle`);
} else if (10 < agePerson < 18) {
    console.log(`drive a bicycle`);
} else {
    console.log(`drive whatever you want`);
}