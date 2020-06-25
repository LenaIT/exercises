'use strict';
//1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

function checkRange(number, obj) {
    return (number >= obj.min && number <= obj.max);
}

console.log("Task 1:");
console.log(checkRange(4, {
    min: 0,
    max: 5
})); //true

console.log(checkRange(4, {
    min: 4,
    max: 5
})); // true

console.log(checkRange(4, {
    min: 6,
    max: 10
})); //false

console.log(checkRange(5, {
    min: 5,
    max: 5
})); //true

//2 Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

//The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
const tiles = [{
    tile: "N",
    score: 1
}, {
    tile: "K",
    score: 5
}, {
    tile: "Z",
    score: 10
}, {
    tile: "X",
    score: 8
}, {
    tile: "D",
    score: 2
}, {
    tile: "A",
    score: 1
}, {
    tile: "E",
    score: 1
}]
console.log(tiles[0]); // { tile: 'N', score: 1 }
console.log((tiles[0]["tile"])); // N
console.log((tiles[0]["score"])) //1;

// loop and replace the number for the array with the index of the loop */

for (let i = 0; i < tiles.length; i++) { //nav through objects
    let objectTile = tiles[i];
    let sum;
    for (let j = 0; j < Object.keys(objectTile).length; j++) { //nav inside obj
        if (tiles[j]["tile"] === "N") {
            sum += tiles[j]["score"];
        }
    }
    console.log(sum);
}



function scrabble(arr) {
    for (const element of arr) {
        for (const item in element) {
            console.log(item[0]);

        }
    }
}
console.log("\nTask 2:");
scrabble(lettersArr);



// 3 Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

function isEmpty(obj) {
    return (Object.entries(obj).length === 0);
}
console.log("Task 3:");
console.log(isEmpty({})); //true
console.log(isEmpty({
    a: 1
})); //false


// 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

//countLetters("tree") ➞ {t: 1, r: 1, e: 2}


//5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

function freeShipping(obj) {
    const prices = Object.values(obj);
    console.log(prices);
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }
    console.log(sum);
    return (sum >= 50);
}

console.log("Task 5:");
console.log(freeShipping({
    "Sponge": 3.50,
    "Soap": 5.99
})); //false

console.log(freeShipping({
    "Surround Sound Equipment": 499.99
})); //true

console.log(freeShipping({
    "Wool": 13.99,
    "Knitting Needles": 15.50,
    "Bag": 13.99
})); //false


// 6 
const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

console.log("Task 6:");
//Write the command to add the language "Go" to the end of the languages array.
programming.languages[3] = "Go";

//Change the difficulty to the value of 7
programming.difficulty = 7;

//Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;

//to add a new key called isFun and a value of true to the programming object
programming.isFun = true;

//Using a loop, iterate through the languages array and console.log all of the languages.
for (const element of programming.languages) {
    console.log(element);
}

//Using a loop, console.log all of the keys in the programming object
console.log(Object.keys(programming));

//with loop
const keys = [];
for (const key in programming) {
    keys.push(key);
}
console.log(keys);

// Using a loop, console.log all of the values in the programming object.
console.log(Object.values(programming));

//with loop
const values = [];
for (const value in programming) {
    values.push(value);
}
console.log(values);





console.log(programming);