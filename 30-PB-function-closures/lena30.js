'use strict';

//1 Addition
function add(number1) {
    return function sum(number2) {
        return number1 + number2;
    }
}
const sum = add(3)(4);
console.log("//1:", sum);


//2 Multiply
const multiplier = function (number1) {
    return function multInside(number2) {
        return number1 * number2;
    }
}
console.log("//2:", multiplier(10)(5));


/* function multiplier1(factor) {
    return number => number * factor;
}
const twoTimes = multiplier1(2);
const threeTimes = multiplier1(3);

console.log(twoTimes(4)); //8
console.log(threeTimes(4)); //12

function multiplier(factor, number) {
    return factor * number;
}
const result = multiplier(2,4);
console.log(result); //8 */



//3 Calculate Money Saved till Pension Day
//const pension = 
(function (age, retirementAge, salary, savingAMonth) {
    if (age >= retirementAge) {
        console.log('//3: You\'re already retired!');
    } else {
        const restAge = retirementAge - age;
        const userSave = salary * (savingAMonth / 100);
        const result = restAge * 12 * userSave;
        console.log(`//3: Your savings will be ${result}\$`);
    }
})(40, 65, 2000, 5);

//to console.log(); in the begining and function inside, and inside function return instead console.log or console.log(pension); 