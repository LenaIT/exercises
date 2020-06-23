'use strict';

//1.sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
function calc(arr) {
    let sum = 0;
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        mult *= arr[i];
    }
    return `Sum is ${sum} and product is ${mult}`;
}

console.log("1: ", calc([1, 2, 3]));
console.log("1: ", calc([10, 2, 300, 5, 8]));
console.log("1: ", calc([10, -10, -5]));


//with reduce
/* function sumOfNumbers(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    }, 0);
}
console.log(sumOfNumbers([1, 2, 3]));

function multOfNumbers(arr) {
    return arr.reduce(function (a, b) {
        return a * b
    });
}
console.log(`1: The sum is ${sumOfNumbers([1, 2, 3])} and the product is ${multOfNumbers([1, 2, 3])}.`); //6 and 6
console.log(`1: The sum is ${sumOfNumbers([10, 2, 300, 5, 8])} and the product is ${multOfNumbers([10, 2, 300, 5, 8])}.`);
console.log(`1: The sum is ${sumOfNumbers([10, -10, -5])} and the product is ${multOfNumbers([10, -10, -5])}.`); //-5 and 500 */


//2.Hello Frien Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.

const movieCharacters = ["Sheldon Cooper", "Penny", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali", "Bernadette Rostenkowski", "Amy Farrah Fowler"];

for (let i = 0; i < movieCharacters.length; i++) {
    console.log(`2: Hello ${movieCharacters[i]}! ${movieCharacters[i]} is at index ${i} of array.`);
}


//3 City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome".

function cityNames(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + ",";
    }
    return str;
}
console.log("3: ", cityNames(['Berlin', 'Paris', 'Prague', 'Rome']));


//4. Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:

function oddsAndEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        (arr[i] % 2 === 0) ? (arr[i]--) : (arr[i]++);
    }
    return arr;
}
console.log("4: ", oddsAndEvens([3, 5, 2, 4])); //[4, 6, 1, 3]
console.log("4: ", oddsAndEvens([6, 9, 10, 20])); //[5, 10, 9, 19]


//5. Capitalize. Create a program that capitalises the first letter of each element in an array of names.

const capitalize = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return result;
}
console.log("5: ", capitalize(["matt", "sara", "lara"])); // ["Matt", "Sara", "Lara"]
console.log("5: ", capitalize(["samuel", "MARIA", "luke", "mary"])); // ["Samuel", "Maria", "Luke", "Mary"]
console.log("5: ", capitalize(["Cynthia", "Karen", "Jane", "Carrie"])); // ["Cynthia", "Karen", "Jane", "Carrie"]



//6 A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values

function noDuplicates(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            // we don't have it already
            newArray.push(array[i]);
            // we push it once!
        }
    }
    return newArray;
}
console.log("6: ", noDuplicates([1, 6, 6, 9, 9])); // ➞ [1, 6, 9]
console.log("6: ", noDuplicates([2, 2, 2, 2, 2, 2])); // ➞ [2]
console.log("6: ", noDuplicates([5, 10, 15, 20, 25])); // ➞ [5, 10, 15, 20, 25]

//from Vassilis
function noDuplicates2(array) {
    let newArray = array;
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(newArray[i]) !== newArray.lastIndexOf(newArray[i])) {
            newArray.splice(i, 1);
            i = 0;
        }
    }
    return newArray;
}
console.log("6: ", noDuplicates2([1, 4, 4, 7, 7, 7]));
console.log("6: ", noDuplicates2([1, 6, 6, 6, 9, 9]));
console.log("6: ", noDuplicates2([2, 2, 2, 2, 2, 2]));
console.log("6: ", noDuplicates2([5, 10, 15, 20, 25]));


//7 Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". Print the result in an array.

function repeat(item, times) {
    const newArr = [];
    for (let i = 0; i < times; i++) {
        newArr.push(item);
    }
    return newArr;
}
console.log("7: ", repeat("example", 3));
console.log("7: ", repeat("cat", 7));