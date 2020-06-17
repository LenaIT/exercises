'use strict';

//1. Declare a variable named myArray and store an array that contains 5 elements. Print the array.

const myArray = ["Berlin", 17, "June", 2020, true];
console.log(myArray.length); //5
console.log(myArray);

//2. Access the 3rd element in the array and save that to another variable named thirdElement. Print the thirdElement.

const thirdElement = myArray[3];
console.log(thirdElement); // 2020

//3. Reassign the fourth element of the array and give it a value of "fourth element". Print the array once more.
myArray[4] = "fourth element";
console.log(myArray);