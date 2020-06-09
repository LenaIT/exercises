'use strict';

//1 Add Up
function addUp(yourNumber) {
    let sum = 0;
    for (let i = 0; i <= yourNumber; i++) {
        sum += i;
    }
    return sum;
}
let output1 = addUp(600);
console.log(output1);


//2 Cubed
const sumOfCubes = (number1, number2, number3) => number1 ** 3 + number2 ** 3 + number3 ** 3;

let output2 = sumOfCubes(1, 5, 9);
console.log(output2);


//3 String Check
const dictionary = (begin, yourWord) => yourWord.startsWith(begin);

let output3 = dictionary("bu", "button");
console.log(output3);
let outputAgain = dictionary("cubu", "button");
console.log(outputAgain);


//4 Less Than or Equal to Zero?
const lessThanOrEqualToZero = (number) => (number <= 0);
let output4 = lessThanOrEqualToZero(-2);
console.log(output4);


//5 Count Occurrences
function letterNumber(yourString, letter) {
    let letterPosition = "not in a string";
    for (let i = 0; i < yourString.length; i++) {
        if (yourString.charAt(i) === letter) {
            letterPosition = i;
            //letterPosition = i + 1; if user do not need to know that JS counting starts with 0
        }
    }
    return `Position of letter ${letter} is ${letterPosition}`;
}

const myStr = letterNumber("It is is a string", "a");
console.log(myStr);


//6