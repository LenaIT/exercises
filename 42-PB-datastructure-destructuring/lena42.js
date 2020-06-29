'use strict';
//1. Array Destructuring
/* Declare the variables fruit, vegetable, food.Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza"(assign the "bread", "cakes"
and "pizza" to food).Use array destructuring assignment to complete this task. */

let fruit, vegetable, food;
const myArr = ["banana", "cucumber", "bread", "cakes", "pizza"];
[fruit, vegetable, ...food] = myArr;
console.log("Task 1:", fruit, vegetable, food);


/* 2.Object Destructuring
Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values. */

const halloween = {
    fran: "witch",
    alex: "ghost",
    petra: "mummy"
};

let fran, alex, petra;
({
    fran,
    alex,
    petra
} = halloween);
console.log("\nTask 2: ");
console.log(fran);
console.log(alex);
console.log(petra);


/*  3. Parameters: Object Destructuring
Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
Then, create a function to display all of the band/musician's data.
`Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.*/

const band = {
    name: "Volbeat",
    greatestHit: "Let it burn",
    nationality: "danish",
    genre: "rock"
};

function displayData(obj) {
    const {
        name,
        greatestHit,
        nationality,
        genre
    } = obj;
    return `${name} is a ${nationality} band. The musician sings ${genre} and their greatest hit is ${greatestHit}.`;
}

console.log("\nTask 3: ", displayData(band));