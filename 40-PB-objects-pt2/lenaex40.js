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

function scrabble(obj) {
    let sum = 0;
    for (let i = 0; i < Object.keys(obj).length; i++) {
        sum += tiles[i]["score"];
    }
    console.log(`Sum of letters is ${sum}`);
}
console.log("\nTask 2:");
scrabble(tiles);


// 3 Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

function isEmpty(obj) {
    return (Object.entries(obj).length === 0);
}
console.log("\nTask 3:");
console.log(isEmpty({})); //true
console.log(isEmpty({
    a: 1
})); //false


// 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

function countLetters(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        if (result[currentLetter]) {
            result[currentLetter] += 1;
        } else {
            result[currentLetter] = 1;
        }
    }
    return result
}

console.log("\nTask 4:", countLetters("tree"));


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

console.log("\nTask 5:");
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

console.log("\nTask 6:");
//Write the command to add the language "Go" to the end of the languages array.
programming.languages[3] = "Go";
//Change the difficulty to the value of 7
programming.difficulty = 7;
//Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
//to add a new key called isFun and a value of true to the programming object
programming.isFun = true;
console.log(programming);
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
console.log("Keys: ", keys);

// Using a loop, console.log all of the values in the programming object.
console.log(Object.values(programming));
//with loop
const values = [];
for (const key in programming) {
    values.push(programming[key]);
}
console.log("Values: ", values);

//Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

programming.myFunction = function () {
    if (this.isChallenging && this.isRewarding) {
        console.log(`Learning the programming languages: ${this.languages} is rewarding and challenging.`);
    }
}
programming.myFunction();

console.log(programming);

//console.log(programming.myFunction);
//Bonus:
//return myFunction: [Function (anonymous)] -> object with type Function (function will not be executed, but we see it is in object)

//Bonus
//The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

/* const object1 = {
    property1: 42
};

Object.seal(object1);

object1.property2 = 33;
console.log(object1.property2); //undefined


delete object1.property1; // cannot delete when sealed
console.log(object1.property1); // 42 */