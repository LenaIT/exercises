"use strict";

//1 NaN
/* Question: Comment your answer in your js file: What does NaN stand for?
NaN means not a Number */

//Check if "hello" is NaN.
console.log(isNaN("hello")); //true, "hello" is not a number

//Check if 3 is NaN.
console.log(isNaN(3)); //false, 3 is a number

//What is the type of NaN?
console.log(typeof NaN); // it is number 


//2 Rounding
let a = 0.1 * 0.2;
console.log(a);
let b = a.toFixed(2);
console.log(b, typeof (b));
//to make it number again
let c = parseFloat(b);
console.log(c, typeof (c));


//3 Infinity
//Divide Infinity by 0.
console.log(Infinity / 0); //answer: Infinity
console.log(0 / Infinity); // answer: 0

//Divide Infinity by Infinity.
console.log(Infinity / Infinity); //answer: NaN
console.log(Infinity / -Infinity); // NaN
console.log(-Infinity / -Infinity); // NaN

//Divide 1 by 0.
console.log(1 / 0); //Infinity