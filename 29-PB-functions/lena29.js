'use strict';

//1 Add Up
function addUp(yourNumber) {
    let sum = 0;
    for (let i = 1; i <= yourNumber; i++) {
        sum += i;
    }
    return sum;
}

let output1 = addUp(4);
let output1A = addUp(13);
let output1B = addUp(600);

console.log(output1, output1A, output1B);


//2 Cubed
const sumOfCubes = (number1 = 0, number2 = 0, number3 = 0) => number1 ** 3 + number2 ** 3 + number3 ** 3;

let output2 = sumOfCubes(1, 5, 9); //855
let output2A = sumOfCubes(2); //NaN, with default parameters 8
let output2B = sumOfCubes(); //NaN, with default parameters 0 

console.log(output2, output2A, output2B);


//3 String Check
const dictionary = (begin, yourWord) => yourWord.startsWith(begin);

let output3 = dictionary("bu", "button");
let output3A = dictionary("tri", "triplet");
let output3B = dictionary("beau", "pastry");

console.log(output3, output3A, output3B);


//4 Less Than or Equal to Zero?
const lessThanOrEqualToZero = (number) => number <= 0;

let output4 = lessThanOrEqualToZero(3);
let output4A = lessThanOrEqualToZero(0);
let output4B = lessThanOrEqualToZero(-4);
let output4C = lessThanOrEqualToZero(10);

console.log(output4, output4A, output4B, output4C);


//5 Count Occurrences
const countLetter = (string, letter) => {
    let result = 0;
    if (string.includes(letter)) {
        for (let i = 0; i <= string.length; i++) {
            if (string[i] === letter) {
                result += 1;
            };
        }
        return `Count ${result} x ${letter}`;
    } else {
        return `Your string does not contains ${letter}`;
    }
}

let firstCheck = countLetter("this is a string", "i");
console.log(firstCheck);


//another variant
/* /const countOccurrences = (string, letter) => {
    const re = new RegExp(letter, "g");
    const count = string.match(re) || [].length;
    return count.length || 0;
} */

//Wrong understood the task. Here I am looking for position of a letter in a string
/* function letterNumber(yourString, letter) {
    let letterPosition = "not in a string";
    for (let i = 0; i < yourString.length; i++) {
        if (yourString.charAt(i) === letter) {
            letterPosition = i;
            //letterPosition = i + 1; if user do not need to know that JS counting starts with 0
        }
    }
    return `Position of letter ${letter} is ${letterPosition}`;
}

const myStr = letterNumber("It is is a string", "i");
console.log(myStr); */



//6  X To The Power of X
const calculateBaseToExponent = (number, power) => number ** power;

const myNumber = calculateBaseToExponent(5, 5);
const myNumber2 = calculateBaseToExponent(10, 10);
const myNumber3 = calculateBaseToExponent(3, 3);

console.log(myNumber, myNumber2, myNumber3);


//7 Dog Years
const calculateDogAge = (yourDogAge) => `Your dog is ${yourDogAge * 7} years old in human years!`;

const myDog = calculateDogAge(4);
console.log(myDog);


//8 A Lifetime Supply
function calcSupply(age, amountPerDay) {
    const maxAge = 80;
    let amount = (maxAge - age) * 365 * Math.round(amountPerDay);
    return `You will need ${amount} of your favorite snacks (${amountPerDay} a day) to last you till the age of ${maxAge}`;
}

const yourSupply = calcSupply(25, 2);
console.log(yourSupply);
const yourSupply1 = calcSupply(40, 3);
console.log(yourSupply1);


/* shorter variant
const calcSupply = (age, amountPerDay) => (80 - age) * 365 * Math.round(amountPerDay);
const yourSupply = calcSupply(25, 2);
console.log(yourSupply); */


//9 Where's Waldo?
const isWaldoInString = (yourString) => yourString.toLowerCase().includes("waldo");

const mySentence = isWaldoInString("is there wal here?");
const mySentence2 = isWaldoInString("I found you Waldo!");
const mySentence3 = isWaldoInString("Is wally here?");
const mySentence4 = isWaldoInString("waldo is here");

console.log(mySentence, mySentence2, mySentence3, mySentence4);


//10 Pie
const isFairlyCutPie = (numberSlices, numberRecipients, proPerson) => (numberRecipients * proPerson <= numberSlices);

const myPie = isFairlyCutPie(8, 3, 2);
const myPie2 = isFairlyCutPie(8, 3, 3);
const myPie3 = isFairlyCutPie(24, 12, 2);

console.log(myPie, myPie2, myPie3);


/*11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
Notes:
Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples:
*/
// 012345678910
//"hello world" = lenght 11
const xo = (myString) => {
    let checkForX = 0; // "x"
    let checkForO = 0; // "o"
    let myNewString = myString.toLowerCase();
    for (let position = 0; position < myNewString.length; position++) {
        if (myNewString.charAt(position) === "x") {
            checkForX++;
        } else if (myNewString.charAt(position) === "o") {
            checkForO++;
        }
    }
    if (checkForO === checkForX) {
        return true;
    } else {
        return false;
    }
}
console.log(xo("ooxx")); // ➞ true
console.log(xo("xooxx")); // ➞ false
console.log(xo("ooxXm")); // ➞ true (case insensitive)
console.log(xo("zpzpzpp")); // ➞ true (returns true if no x and o)
console.log(xo("zzoo")); // ➞ false


//another variant
const checkXandO = (string) => {
    let checkX = string.includes("x");
    let checkO = string.includes("o");
    let sumX = 0;
    let sumO = 0;
    if (checkX || checkO) {
        for (let i = 0; i <= string.length; i++) {
            if (string[i] === "x") {
                sumX += 1;
                /*  console.log(`sumX: ${sumX}`); */
            } else if (string[i] === "o") {
                sumO += 1;
                /*  console.log(`sumO: ${sumO}`); */
            }
        }
    }
    /*  console.log(`sumX: ${sumX}, sumO: ${sumO}`); */
    if (sumX === sumO) {
        return true;
    } else {
        return false;
    }
}

//12 isPrime?

const isPrime = number => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}
const primeResult1 = isPrime(7);
console.log(primeResult1);
const primeResult2 = isPrime(9);
console.log(primeResult2);
const primeResult3 = isPrime(10);
console.log(primeResult3);

//13
const validate = address => {
    let atPosition;
    let dotPosition;
    if (address[0] !== '@') {
        for (let i = 0; i < address.length; i++) {
            if (address[i] === "@") {
                atPosition = i;
            }
        }
        for (let i = atPosition; i < address.length; i++) {
            if (address[i] === ".") {
                dotPosition = i;
            }
        }
        if (atPosition < dotPosition) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
const emailResult1 = validate("john@example.com");
console.log(emailResult1);
const emailResult2 = validate("@example.com");
console.log(emailResult2);
const emailResult3 = validate("john.smith@com");
console.log(emailResult3);
const emailResult4 = validate("john.smith@email.com");
console.log(emailResult4);
const emailResult5 = validate("johnsmithemail.com");
console.log(emailResult5);
const emailResult6 = validate("johnsmith@emailcom");
console.log(emailResult6);
const emailResult7 = validate("johnsmithemailcom");
console.log(emailResult7);

//13
const validateEMail = (string) => {
    let isAsRequired = true;
    let countAt = 0;
    let atPos = 0;
    let dotPos = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "@") {
            countAt++;
            atPos = i;
        }
        if (string[i] === ".") {
            dotPos = i;
        }
    }
    if (string[0] === "@" || countAt !== 1 || atPos > dotPos) {
        isAsRequired = false;
    }
    return `"${string}" is ${isAsRequired ? "valid" : "invalid"}.`;
};