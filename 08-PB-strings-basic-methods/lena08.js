"use strict";

//1
let walkPark = "I can walk in the park all day!";
console.log(walkPark.substring(18, 22));

//2
let world = "Hello World";
console.log(world.toUpperCase());

//3
let earth = "Hello Earthling";
console.log(earth.toLowerCase());

//4
let jS = "JavaScript";
console.log(jS.substring(3, 6));

//5
let shoes = "nice shoes";
//console.log(shoes.includes("l"), shoes.includes("n"));
console.log(shoes.includes("l") ? "yes, \"l\" is in our string" : "No, there is any \"l\" ");
console.log(shoes.includes("n") ? "yes, \"n\" is in our string" : "No, there is any \"n\" ");

//6
let fruit = "Bananas";
console.log(`${fruit[0]}${fruit}${fruit[0]}`);

//7
let newString = "Scritch";
console.log(`${newString.substring(4, 7)}${newString}${newString.substring(4, 7)}`);

//8
let dance = "BoogieWoogie";
console.log(`${dance[dance.length - 1]}${dance.substring(1,11)}${dance[0]}`);

//9
let firstName = "Lena";
let city = "Berlin";
let profession = "a student of DCI";
console.log(`My name is ${firstName}. I live in ${city} and I am ${profession}.`);
//console.log ("My name is " + firstName + ". I live in " + city + " and I am " + profession + "." );


//10
let animal = "the quick brown fox";
console.log(animal.length);
console.log(animal[0].toUpperCase() + animal.substring(1));