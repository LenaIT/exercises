"use strict";

//1 Minimum and maximum
// Lowest Number
console.log(Math.min(-1, 0, 1, 2, 3, 4));

//Highest Number
console.log(Math.max(-1, 0, 1, 2, 3, 4));


//2 Rounding
//Round up
console.log(Math.ceil(3321.32321)); //3222
console.log(Math.ceil(326.76)); //327
console.log(Math.ceil(76788.7)); //76789
console.log(Math.ceil(-9.78)); //-9
console.log(Math.ceil(43.342)); //44

//Round down
console.log(Math.floor(3321.32321)); //3321
console.log(Math.floor(326.76)); //326
console.log(Math.floor(76788.7)); //76788
console.log(Math.floor(-9.78)); //-10
console.log(Math.floor(28.329)); //28

//3 Create a program that prints a random integer from 1 - 6.
//first variant
let random = Math.random();
let a = random * 5 + 1;
let roundA = Math.round(a);
console.log(`Random integer number between 1 and 6: ${roundA}`);

//second variant
let b = Math.floor(Math.random() * 6 + 1);
console.log(`Random integer number between 1 and 6: ${b}`);