'use strict';

//1
let determiner = 5;
let x = null;
if (determiner < 0) {
    x = "Less than 0";
} else {
    x = "Greater or equal to 0";
}

//x = determiner < 0 ? "Less than 0" : "Greater or equal to 0";
console.log(x);

//2
let updater = null;
if (determiner >= 0) {
    updater = "Greater or equal to 0";
    let message = "Positive Integer";
    console.log(message);
} else {
    updater = "Less than 0";
}
console.log(updater);


//What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
// Will be an error (ReferenceError: message is not defined).Variable message is in block scope and we can use it only inside curly brackets, where it was declared

//3 When do you use a ternary v.s. an if statement? Give an example.
// In "if else" we can use more than one statement (if...else if...else if...else).So ternary only when we check one statement

//Example
let age = 15;
(age >= 18) ? console.log(`yes, you can drive a car`): console.log(`no, only bicycle`);


let agePerson = 50;
if (agePerson <= 10) {
    console.log(`drive a child bicycle`);
} else if (10 < agePerson < 18) {
    console.log(`drive a bicycle`);
} else {
    console.log(`drive whatever you want`);
}