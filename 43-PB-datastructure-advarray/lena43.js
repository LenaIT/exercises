'use strict';
//1 Return the total amount of orders.

const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

const amountOfOrders = orders.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.amount;
}, 0);
console.log("Task 1: ");
console.log(amountOfOrders); //1075

//with an arrow
const amountOfOrders2 = orders.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
console.log(amountOfOrders2); //1075


//2 Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const increment = arrayOfNumbers.map(function (value) {
    return ++value;
});

console.log("\nTask 2: ", increment);

//with arrow
const increment2 = arrayOfNumbers.map((value) => ++value);
console.log(increment2);


//3 Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

function filterEvens(value) {
    return value % 2 === 0;
}

console.log("\nTask 3: ");
console.log([1, 2, 3, 11, 12, 13].filter(filterEvens)); //returns [2,12]
console.log([22, 2, 31, 110, 6, 13].filter(filterEvens)); // [22,2,110,6]


/* const filterEvens = (arr) => arr.filter(function (value) {
    return value % 2 === 0;
}); */

/* function filterEvens(arr) {
    const result = arr.filter(function (value) {
        return value % 2 === 0;
    });
    return result;
} */

//4 Given an array, create a function which filters array based on a search query.

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (arr, search) => arr.filter(function (value) {
    let result = value.includes(search);
    return result;
});

console.log("\nTask 4: ");
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];


//5 Write a function called sum that uses the reduce method to sum up an array of numbers

//result - previous value(it saves a result of addition); current - item
const sum = arr => arr.reduce((previous, current) => previous + current);

console.log("\nTask 5");
console.log(sum([1, 2, 3, 4, 5])); // 15
console.log(sum([6, 7, 7])); //20


//6 Given an array of numbers, find the square root of each element in the array.
const myNumbers = [1, 4, 7, 9, 36];
const roots = myNumbers.map((value) => Math.sqrt(value));
console.log("\nTask 6: ", roots); //[ 1, 2, 2.6457513110645907, 3, 6 ]