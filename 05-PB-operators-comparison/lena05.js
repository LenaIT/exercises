"use strict";

//0
const x = 20;
const y = 30;
console.log("Declared two variables: " + x + " and " + y);

//1
let result01 = x === y;
console.log("Is x equal y? " + result01);

//2
let result02 = x !== y;
console.log("Is x not equal y? " + result02);

//3
let result03 = x > y;
console.log("Is x greater that y? " + result03);

//4
let result04 = x <= y;
console.log("Is x less or equal to y? " + result04);

//5
let result05 = x < y;
console.log("Is y greater than x? " + result05);

//6
const z = 5;
let result06 = z * x > z + y;
console.log("Is z multiply z greater than z added y? " + result06);

//7
let result07 = x - z < y / z;
console.log("Is x-z less than y/z? " + result07);

//8
let result08 = x === y === z;
console.log("Are x,y and z equal? " + result08);

//9
let result09 = x % z === y % z;
console.log("Is remainder x/z equal remainder y/z? " + result09);

//10
let result10 = x + z > y - z;
console.log("Is x+z greater than z-y? " + result10);

let result10a = x + z === y - z;
console.log("Is x+z equal z-y? " + result10a);