'use strict';

//1 Print Exponential Values

function calculateExponent(number1, number2) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        console.log("both numbers");
        for (let i = 1; i <= number2; i++) {
            let exp = number1 ** i;
            console.log(exp);
        }
    } else {
        console.log("Error");
    }
}
let a = 2;
let b = 4;
calculateExponent(a, b);

// Fruits

function printFavoriteFruit(userFruit) {
    fruit = "kiwi";
    console.log(`My favorite fruit is: ${fruit}.`);
}

let fruit = "strawberry";
printFavoriteFruit(fruit);

//3 Multiply a Number by Itself

function exponent(a, b) {
    let result = a ** b;
    console.log(`${a}^${b} = ${result}`);
}
let myNumber = 2;
let times = 4;
exponent(myNumber, times);

/* console.log(result); 
ReferenceError: result is not defined
Variable result lives inside function in local scope. It cannot be used outside of a function 
*/