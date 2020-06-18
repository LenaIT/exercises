'use strict';
/* 1 The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
findGreatest([3, 4, 5], 4) ➞ 5
findGreatest([10, 20, 30], 12) ➞ 20, 30
findGreatest([0, 10, 3], 4) ➞ 10 */

function findGreatest(arr, number) {
    return arr.filter(item => item > number);
}

console.log("1: ");
console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

/* 2. For the longest word. Create a function to find the longest word in a given string.
longestWord("this is a web development course") ➞ "development"
 */

function longestWord(str) {
    const findLongestWord = str.split(' ');
    const inArray = findLongestWord.sort(function (a, b) {
        return b.length - a.length;
    });
    return inArray[0].length;
}

console.log("2: ", longestWord("this is a web development course")); //11

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
    const inArr = numbers.split('');
    return inArr.reverse();
}
console.log("3: ", reverse("34532"));

/* 4. AEIOU: Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.
findVowels("this is a string") ➞ 4 */

function findVowels(str) {
    const inArr = str.split('');
    const vowels = inArr.filter(item => item === "a" || item === "e" || item === "i" || item === "a" || item === "o" || item === "u");
    return vowels.length;
}
console.log("4: ", findVowels("this is a string"));

/* 5. Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.
missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7 */


//sum of elements in arr
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = myArray.reduce((a, b) => a + b);
console.log(sum);

function missingNums(arr) {
    const sumGivenArr = arr.reduce((a, b) => a + b);
    return sum - sumGivenArr;
}
console.log("5:", missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log("5:", missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log("5:", missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

/* 6. Cubed. Create a function that takes in an array of numbers and returns the sum of its cubes.
sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes([2]) ➞ 8
sumOfCubes([]) ➞ 0 */

function sumOfCubes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 3;
    }
    return sum;
}

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));


