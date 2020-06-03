'use strict';

//1 Addition
let sum = 0
for (let i = 0; i <= 20; i++) {
    sum += i;
    console.log(sum);
}
console.log(`Sum of numbers from 1 to 20 is ${sum}`);

//2 Bottles of beer on the wall
for (let bottleNumber = 1; bottleNumber <= 5; bottleNumber++) {
    let numbr;
    switch (bottleNumber) {
        case 1:
            numbr = "one bottle";
            break;
        case 2:
            numbr = "two bottles";
            break;
        case 3:
            numbr = "three bottles";
            break;
        case 4:
            numbr = "four bottles";
            break;
        case 5:
            numbr = "five bottles";
            break;
        default:
            console.log("Error");
    }
    console.log(`There is ${numbr} of beer on the wall.`);
}


//3 The odd/even reporter
for (let myNumber = 0; myNumber <= 20; myNumber++) {
    if (myNumber % 2 === 0) {
        console.log(`${myNumber} is even`);
    } else {
        console.log(`${myNumber} is odd`);
    }
}
//console.log(myNumber % 2 === 0 ? console.log(`${myNumber} is even`) : console.log(`${myNumber} is odd`);


//4 Multiplication Tables
for (let myVar = 0; myVar <= 10; myVar++) {
    let mult = myVar * 9;
    console.log(`${myVar} * 9 = ${mult}`);
}
//Bonus
for (let multipl = 0; multipl <= 10; multipl++) {
    for (let index = 0; index <= 10; index++) {
        let res = multipl * index;
        console.log(`${multipl} * ${index} = ${res}`);
    }
}

//5 Fizz Buzz 
for (let myInteg = 1; myInteg <= 100; myInteg++) {
    if (myInteg % 3 === 0 && myInteg % 5 === 0) {
        console.log(`${myInteg}: 'FizzBuzz'`);
    } else if (myInteg % 3 === 0) {
        console.log(`${myInteg}: 'Fizz'`);
    } else if (myInteg % 5 === 0) {
        console.log(`${myInteg}: 'Buzz'`);
    } else {
        console.log(myInteg);
    }
}

//6 Sum of Multiples 
let sumTask6 = 0;
for (let myNum = 1; myNum < 1000; myNum++) {
    if (myNum % 3 === 0 || myNum % 5 === 0) {
        sumTask6 += myNum;
        //console.log(`$ {sumTask6}`);
    }
}
console.log(`Sum of numbers from 1 to 1000, which are dividable by 3 or by 5 is ${sumTask6}`);

//Bonus
//7 Write programs that produce the following outputs:

//a
//100 200 300 400 500 600 700 800 900 1000
for (let a = 1; a <= 10; a++) {
    let multA = a * 100;
    console.log(multA);
}

//b   1 2 4 8 16 32 64 128
for (let b = 1; b <= 128; b *= 2) {
    console.log(b);
}

//c   3 6 9 12 15
for (let c = 0; c <= 15; c += 3) {
    console.log(c);
}

//d   9 8 7 6 5 4 3 2 1 0
for (let d = 9; d >= 0; d--) {
    console.log(d);
}

//e  1 1 1 2 2 2 3 3 3 4 4 4
let row = "";
for (let e = 1; e <= 4; e++) {
    for (let j = 1; j <= 3; j++) {
        row += +e;
    }
}
console.log(row);

//f   0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let line = "";
for (let f = 0; f <= 4; f++) {
    for (let j = 0; j <= 4; j++) {
        line += +j;
    }
}
console.log(line);

//8 isPalindrome. 
/* let inputString = "rentner";
let reverseString = "";
for (let i = inputString.length; i >= 1; i--) {
    reverseString += inputString[i - 1];
    console.log(reverseString);
}
console.log(
    inputString === reverseString ?
    `'${inputString}' is a palindrome. :)` :
    `'${inputString}' is not a palindrome. :(`
); */

let inputString = "madam";
let reverseString = "";
for (let i = 1; i <= inputString.length; i++) {
    reverseString += inputString[inputString.length - i];
    console.log(reverseString);
}
console.log(
    inputString === reverseString ? `'${inputString}' is a palindrome. :)` : `'${inputString}' is not a palindrome. :(`
);