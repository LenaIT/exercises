"use strict";

//1
let sellTicket = 6450;
let ticketPrice = 15;
let amountTicket = sellTicket / ticketPrice;
console.log(amountTicket); //430

//2
let incomeWeek = 500;
let weekYear = 365 / 7;
console.log(weekYear);
let incomeYear = incomeWeek * weekYear;
console.log(incomeYear); //26 071$

//3
let a = 17;
let b = 30;
let percentage = a * 100 / b;
console.log(percentage + "%"); //56.7%

//4
let side = 4.75;
let perimeterSquare = 4 * side;
console.log(perimeterSquare); //19

//5
let c = 5;
let d = 6;
let e = 7;
let perimeterTriangle = c + d + e;
console.log(perimeterTriangle); //18

//6
let sideSq = 5;
let areaSq = sideSq * sideSq;
console.log(areaSq); //25

//7
let p = perimeterTriangle / 2;
let areaTR = Math.sqrt(p * (p - c) * (p - d) * (p - e));
console.log(areaTR); // 14, 7

//8
let sideCube = 9;
let volumeCube = sideCube * sideCube * sideCube;
console.log(volumeCube); //729

//9
let billOne = 22.35 + 22.35 * 0.1;
let billTwo = 26.67 + 26.67 * 0.15;
let billThree = 35.92 + 35.92 * 0.2;
console.log(billOne, billTwo, billThree);
//24.585 30.6705 43.104

//10
let workingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8 + 5 + 7 + 4;
let averageHours = workingHours / 11;
console.log(averageHours); //5.73

//11
let scoreSum = 75 + 70 + 85 + 90 + 100;
console.log(scoreSum); // 420
let scoreAv = 85;
let sixthTest = 85 * 6 - scoreSum;
console.log("Score in the sixth test: " + sixthTest); //90

//12
let totalPoints = 9 * 80;
let nowPoints = 8 * 78;
let lastAssessment = totalPoints - nowPoints;
console.log("James needs a minimum of " + lastAssessment + "%"); //96%