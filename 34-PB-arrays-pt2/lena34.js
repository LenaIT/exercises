'use strict';
/* 1 The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.*/

function findGreatest(arr, number) {
    return arr.filter(item => item > number);
}

console.log("1: ", findGreatest([3, 4, 5], 4)); //5
console.log("1: ", findGreatest([10, 20, 30], 12)); // 20, 30
console.log("1: ", findGreatest([0, 10, 3], 4)); // 10


/* 2. For the longest word. Create a function to find the longest word in a given string. */

function longestWord(str) {
    const findLongestWord = str.split(' ');
    const inArray = findLongestWord.sort(function (a, b) {
        return b.length - a.length;
    });
    return inArray[0];
    //return  inArray[0].length; 11
}

console.log("2: ", longestWord("this is a web development course")); //development

// loop
function longestWordLoop(str) {
    const strSplit = str.split(' ');
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}

console.log("2: ", longestWordLoop("this is a web development course")); //11


//3. Reverse. Create a function to reverse a number.  Ex: reverse(34532) ➞ 23543

function reverse(numbers) {
    const inArr = numbers.split("");
    const reverse = inArr.reverse();
    return reverse.join("");
}
console.log("3: ", reverse("34532"));


/* 4. AEIOU: Vowels.Create a function that takes a string in its parameters and counts the number of vowels(i.e.in English, "a, e, i, o, u") in the string. */

function findVowels(str) {
    const inArr = str.split('');
    const vowels = inArr.filter(item => item === "a" || item === "e" || item === "i" || item === "a" || item === "o" || item === "u");
    return vowels.length;
}
console.log("4: ", findVowels("this is a string")); //4

//with match
function vowels(str) {
    const newArray = str.match(/[aeiouAEIOU]/g);
    //console.log(newArray);
    return newArray === null ? 0 : newArray.length;
}
console.log("4: ", vowels('this is a string'));


/* 5. Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.*/

//sum of elements in arr
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = myArray.reduce((a, b) => a + b);
//console.log(sum);

function missingNums(arr) {
    const sumGivenArr = arr.reduce((a, b) => a + b);
    return sum - sumGivenArr;
}
console.log("5: ", missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10])); //5
console.log("5: ", missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8])); //10
console.log("5: ", missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9])); //7


/* 6. Cubed. Create a function that takes in an array of numbers and returns the sum of its cubes.*/

function sumOfCubes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 3;
    }
    return sum;
}

console.log("6: ", sumOfCubes([1, 5, 9])); //855
console.log("6: ", sumOfCubes([2])); //8
console.log("6: ", sumOfCubes([])); //0


/* 7. Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
If none of the words match, return an empty array.
Keep the filtered array in the same relative order as the original array of words. */

function dictionary(str, arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith(str)) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log("7: ", dictionary("bu", ["button", "breakfast", "border"])); // ["button"]
console.log("7: ", dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])) //["triplet", "tries", trip"]
console.log("7: ", dictionary("beau", ["pastry", "delicious", "name", "boring"])); //[]


/* 8. Even Number Generator. Create a function that finds all even numbers from 1 to the given number.
If there are no even numbers, return an empty array. Do not include 0. */

function evenNums(number) {
    const result = [];
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
    return result;
}
console.log("8: ", evenNums(8)); // [2, 4, 6, 8]
console.log("8: ", evenNums(4)); // [2, 4]
console.log("8: ", evenNums(2)); // [2]


/* Bonus Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.*/
function alphaOrder(str) {
    const strInArr = str.split(''); // to make array from str
    const arrLetters = strInArr.sort();
    const line = arrLetters.join(""); // to make atr from array
    return line;
}
console.log("Bonus: ", alphaOrder("webdev")); // "bdeevw"