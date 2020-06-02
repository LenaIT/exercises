'use strict';

//1
let i = 0;
while (i < 15) {
    console.log(`Variable is ${i}`);
    i++;
}

//2
let myNumber = 1;
let sumNumbers = 0;

while (myNumber <= 20) {
    //sumNumbers = sumNumbers + myNumber;
    sumNumbers += myNumber; //+= is like assigning and adding at the same time
    myNumber++;
}
console.log(`Sum of numbers from 1 ro 20 is ${sumNumbers}`);

//3
let myVariable = 0;
do {
    console.log(`The number is ${myVariable}`);
    myVariable++;
} while (myVariable < 20)