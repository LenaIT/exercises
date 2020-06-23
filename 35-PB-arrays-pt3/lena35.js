'use strict';

/* 1. Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.*/

function isFourLetters(arr) {
    const NEW_ARRAY = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            NEW_ARRAY.push(arr[i]);
        }
    }
    return NEW_ARRAY;
}
console.log("1: ", isFourLetters(["John", "James", "Jack", "Jeanne"])); //["John", "Jack"]
console.log("1: ", isFourLetters(["Tomato", "Corn", "Lettuce"])); //["Corn"]
console.log("1: ", isFourLetters(["Dog", "Cat", "Deer"])); //["Deer"]



// 2. Months. Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

function monthName(number) {
    const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return MONTH[number - 1];
}
console.log("2: ", monthName(3)); //March
console.log("2: ", monthName(12)); //December
console.log("2: ", monthName(6)); //June
console.log("2: ", monthName(1)); //January



/* 3. Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:
For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
If the number cannot be divided evenly by 4, simply return the number.
The given integer will always be equal to or greater than 1.
Include the given number (the number in the parameters).*/

function amplify(number) {
    const ARR_NUMBERS = [];
    for (let i = 1; i <= number; i++) {
        ARR_NUMBERS.push(i);
    }
    console.log(ARR_NUMBERS);
    for (let i = 3; i < ARR_NUMBERS.length; i++) { // first % 4 is 4 (skip 1, 2, 3) 
        if (ARR_NUMBERS[i] % 4 === 0) {
            ARR_NUMBERS[i] = ARR_NUMBERS[i] * 10;
        }
    }
    return ARR_NUMBERS;
}

// second variant with one for 
function amplify2(number) {
    const ARR_NUMBERS = [];
    for (let i = 1; i <= number; i++) {
        if (i % 4 === 0) {
            ARR_NUMBERS.push(i * 10);
        } else {
            ARR_NUMBERS.push(i);
        }
    }
    return ARR_NUMBERS;
}


console.log("3: ", amplify2(4)); // [1, 2, 3, 40]
console.log("3: ", amplify2(3)); // [1, 2, 3]
console.log("3: ", amplify2(25)); // [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

//with map
const isFourMap = (num) => {
    let array1 = [];
    for (let i = 1; i <= num; i++) {
        array1.push(i);
    }
    const map1 = array1.map((x) => (x % 4 === 0 ? x * 10 : x));
    return map1;
};
console.log(isFourMap(6));


//4. One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
            return arr[i]
        }
    }
}

console.log("4: ", unique([3, 3, 3, 7, 3, 3])); // 7
console.log("4: ", unique([0, 0, 0.77, 0, 0])); //0.77
console.log("4: ", unique([0, 1, 1, 1, 1, 1, 1, 1])); //0
console.log("4: ", unique([1, 1, 1, 1, 1, 1, 8])); //8



//from Martina
function unique1(array) {
    let currentValue = null;
    for (let i = 0; i < array.length; i++) {
        currentValue = array[i];
        if (array.indexOf(currentValue) === array.lastIndexOf(currentValue)) { // no doublette
            return currentValue; // uniqueness
        } else {
            console.log("We found a double!" + array[i]);
        }
    }
}
console.log(unique1([3, 3, 3, 7, 3, 3])); // ➞ 7
console.log(unique1([0, 0, 0.77, 0, 0])); // ➞ 0.77
console.log(unique1([0, 1, 1, 1, 1, 1, 1, 1])); // ➞ 0
console.log(unique1([1, 1, 1, 1, 1, 1, 1, 0])); // ➞ 0


/* 5. Word Ranking. Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
The returned string should only contain alphabetic characters (a-z).
Preserve case in the returned string (see 4th example above).*/

function wordRank(str) {
    const LETTERS = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const STR_IN_ARR = str.split(' '); //separate words
    console.log(STR_IN_ARR);

    const ARR_SUM = [];

    for (let i = 0; i < STR_IN_ARR.length; i++) {
        let sum = 0;
        for (let j = 0; j < STR_IN_ARR[i].length; j++) {
            if (LETTERS.indexOf(STR_IN_ARR[i][j].toLowerCase()) !== -1) {
                sum += LETTERS.indexOf(STR_IN_ARR[i][j].toLowerCase());
            }
        }
        ARR_SUM.push(sum);
    }
    console.log(ARR_SUM); //sum of each word in array

    //to find the largest sum
    let largest = 0;
    for (let i = 0; i < ARR_SUM.length; i++) {
        if (ARR_SUM[i] > largest) {
            largest = ARR_SUM[i];
        }
    }
    console.log(`Largest sum ${largest}, index of largest is ${ARR_SUM.indexOf(largest)}`);
    let index = ARR_SUM.indexOf(largest); //index of the largest sum in arr

    return STR_IN_ARR[index];
}

console.log("5: ", wordRank("The quick brown fox.")); //"brown"
console.log("5: ", wordRank("Nancy is very pretty.")); // "pretty"
console.log("5: ", wordRank("Check back tomorrow, man!")); //"tomorrow"
console.log("5: ", wordRank("Today is Wednesday.")); // "Wednesday"


// one more variant
/* function wordRank(str) {
    const LETTERS = ['.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const STR_IN_ARR = str.split(' '); //separate words
    console.log(STR_IN_ARR);

    let maxSum;
    let result;

    for (let i = 0; i < STR_IN_ARR.length; i++) {
        let sum = 0;
        for (let j = 0; j < STR_IN_ARR[i].length; j++) {
            if (LETTERS.indexOf(STR_IN_ARR[i][j].toLowerCase()) !== -1) {
                sum += LETTERS.indexOf(STR_IN_ARR[i][j].toLowerCase());
            }
        }

        if (!maxSum) {
            maxSum = sum;
        }

        if (!result) {
            result = STR_IN_ARR[i];
        }

        if (sum > maxSum) {
            result = STR_IN_ARR[i];
            maxSum = sum;
        }
    }

    return result;
}

console.log("5: ", wordRank("The quick brown fox.")); //"brown"
console.log("5: ", wordRank("Nancy is very pretty.")); // "pretty"
console.log("5: ", wordRank("Check back tomorrow, man!")); //"tomorrow"
console.log("5: ", wordRank("Today is Wednesday.")); // "Wednesday" */



//from Martina
// Word Ranking
function wordRank1(sentence) {
    const words = sentence.split(" ");
    console.log(words);
    const ranking = [];
    for (let i = 0; i < words.length; i++) {
        let wordScore = 0;
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            const letterScore = word.toUpperCase().charCodeAt(j) - 64; // little hacky :D
            // charCodeAt would return a number between 97 (a) - 122 (z)
            wordScore += letterScore;
        }
        ranking.push(wordScore);
    }
    let winningPosition = 0;
    for (let i = 0; i < ranking.length; i++) {
        if (i === 0) {
            // first entry, skip over
            continue;
        }
        if (ranking[i] > ranking[winningPosition]) {
            winningPosition = i;
        }
    }
    return `${words[winningPosition]} is the winner with a score of ${ranking[winningPosition]}`;
}

//console.log(wordRank("Testing, one, 2, three"));
console.log(wordRank1("The quick brown fox.")); // ➞ "brown"
console.log(wordRank1("Nancy is very pretty.")); // ➞ "pretty"
console.log(wordRank1("Check back tomorrow, man!")); //➞ "tomorrow"
console.log(wordRank1("Today is Wednesday.")); // ➞ "Wednesday"

// charCodeAt would return a number between 65 (A) - 90 (Z)

/* 6. c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 
'a's with 4, 
'e's with 3, 
'i's with 1, 
'o's with 0,
's's with 5. */

function hackerSpeak(str) {
    const STR_IN_ARRAY = str.split('');
    //console.log(STR_IN_ARRAY);
    for (let i = 0; i < STR_IN_ARRAY.length; i++) {
        if (STR_IN_ARRAY[i] === "a") {
            STR_IN_ARRAY[i] = "4";
        } else if (STR_IN_ARRAY[i] === "e") {
            STR_IN_ARRAY[i] = "3";
        } else if (STR_IN_ARRAY[i] === "i") {
            STR_IN_ARRAY[i] = "1";
        } else if (STR_IN_ARRAY[i] === "o") {
            STR_IN_ARRAY[i] = "0";
        } else if (STR_IN_ARRAY[i] === "s") {
            STR_IN_ARRAY[i] = "5";
        }
    }

    const RESULT = STR_IN_ARRAY.join("");
    return RESULT;
}

console.log("6: ", hackerSpeak("javascript is cool")); //"j4v45cr1pt 15 c00l"
console.log("6: ", hackerSpeak("programming is fun")); //"pr0gr4mm1ng 15 fun"
console.log("6: ", hackerSpeak("become a coder")); //"b3c0m3 4 c0d3r" 



//from Martina 
function hackerSpeak1(string) {
    let arr = string.split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "a":
                arr[i] = "4";
                break;
            case "e":
                arr[i] = "3";
                break;
            case "i":
                arr[i] = "1";
                break;
            case "o":
                arr[i] = "0";
                break;
            case "s":
                arr[i] = "5";
        }
    }
    return arr.join("");
}

function hackerSpeak2(string) {
    let newString = string; // copy to the string for output
    //const regexA = /a/gi;
    //console.log(typeof regexA);
    newString = newString.replace(/a/gi, 4)
        .replace(/e/gi, 3)
        .replace(/i/gi, 1)
        .replace(/o/gi, 0)
        .replace(/s/gi, 5);
    return newString;
}
console.log(hackerSpeak2("javascript is cool"));
console.log(hackerSpeak2("programming is fun"));
console.log(hackerSpeak2("become a coder"));
// Bonus Questions

/* 1. Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.

isSymmetrical(7227) ➞ true
isSymmetrical(12567) ➞ false
isSymmetrical(44444444) ➞ true
isSymmetrical(9939) ➞ false
isSymmetrical(1112111) ➞ true */

function isSymmetrical(str) {
    const MY_ARR = [...arguments]; //array with one number
    console.log(MY_ARR);
    const ARR_IN_STR = MY_ARR.join(''); //array in str
    console.log(ARR_IN_STR);
    const SEPARATE_NUM_ARR = ARR_IN_STR.split(''); //arr with separate numbers
    console.log(SEPARATE_NUM_ARR);

    for (let i = 0; i < SEPARATE_NUM_ARR.length; i++) {
        // Check the element to the element in the same place counting from the back
        if (SEPARATE_NUM_ARR[i] !== SEPARATE_NUM_ARR[SEPARATE_NUM_ARR.length - 1 - i]) {
            return false;
        }
    }
    return true;
}


console.log("Bonus 1: ", isSymmetrical(7227));
console.log("Bonus 1: ", isSymmetrical(12567)); ///f
console.log("Bonus 1: ", isSymmetrical(44444444));
console.log("Bonus 1: ", isSymmetrical(9939)); //f
console.log("Bonus 1: ", isSymmetrical(1112111));


/* 2. snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.*/

function toCamelCase(str) {
    const MY_ARR = str.split("");
    console.log(MY_ARR);
    for (let i = 0; i < MY_ARR.length; i++) {
        if (MY_ARR[i] === "_") {
            MY_ARR[i] = MY_ARR[i + 1].toUpperCase();
        }
    }
    console.log(MY_ARR);
    const RESULT = MY_ARR.join('');
    return RESULT;
}

console.log("Bonus 2: ", toCamelCase("hello_world")); //"helloWorld"
console.log("Bonus 2: ", toCamelCase("javaScriptIsFun")); //"javaScriptIsFun"