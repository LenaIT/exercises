'use strict';

//1 Addition
function add(number1) {
    return function sum(number2) {
        return number1 + number2;
    }
}
console.log(add(3)(4));


//2 Multiply
function multiplier(number1) {
    return function multInside(number2) {
        return number1 * number2;
    }
}
let myVar = multiplier(5);
console.log(myVar(10));


//3 Calculate Money Saved till Pension Day
const pension = (function (age, retirementAge, salary, savingAMonth) {
    if (age >= retirementAge) {
        console.log('You\'re already retired!');
    } else {
        const restAge = retirementAge - age;
        const userSave = salary * (savingAMonth / 100);
        const result = restAge * 12 * userSave;
        console.log(`Your savings will be ${result}\$`);
    }
})(40, 65, 2000, 5);