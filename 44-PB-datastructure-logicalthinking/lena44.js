'use strict';


/*1. Lowest to Highest
Given an array of numbers from 1-9:

[4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
Sort the array from lowest value to highest.

0. Create an empty array
1. Go through items of given array one after another
2. Compare items on position 0 with item on position one
3. Item which is smaller compare with next one 
4. Find the smallest item
5. Push the smallest item in an empty array on position 0 and delete this one from original array.
6. Do again steps 2- 5 until original array not will be empty*/

const myNumbers = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
const sorted = myNumbers.sort((a, b) => a - b);
console.log(sorted);


/* 2. Alphabetical Order
Given an array of names: ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
Sort the array based on alphabetical order from a→ z. 

0. Create an empty array
1. Create an array with all letters
3. Take a first letter of first item in a given array and find an index in array of letters
4. Take a first letter of second word and find it index in letter array
5. Compare
6. One is smaller compare with first letter index of next word
7. If some items have the same index of first letter continue compare indexes of second letters
8. When one is left push it an empty array
9. Delete this one from given array
10.Continue 3-9 till given array not will be empty*/

const names = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
const sortedNames = names.sort();
console.log(sortedNames);


//Bonus 2
//Create a function that takes an array as a parameter.Order the array based off of the elements ' length. Assume the elements are strings. 
const sortLength = arr => arr.sort((a, b) => b.length - a.length);

console.log(sortLength(names));