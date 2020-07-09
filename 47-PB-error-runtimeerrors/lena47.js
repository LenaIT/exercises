'use strict';

//1 
class Dog {
    constructor(name) {
        this.name = name;
        this.bark = function () {
            console.log(`${this.name} says woof`);
        }
        //bark() {}
    }
}

let fido = new Dog("fido");
console.log("Task 1:");
console.log(fido);
fido.bark();


//2 Create a function called getMonthName, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.

function getMonthName(numberMonth) {
    const months = ["", "Jan", "Feb", "Mar", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    try {
        if (numberMonth >= 1 && numberMonth <= 12) {
            return months[numberMonth];
        } else {
            throw new Error("Invalid Month Number!");
        }
    } catch (e) {
        return e;
    }
}
console.log("\nTask 2:");
console.log(getMonthName(15));
console.log(getMonthName(11));
console.log(getMonthName(1));


/* 3. Reverse
Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument. */

function reverseString(str) {
    try {
        if (typeof (str) === "string") {
            return str.split("").reverse().join("");
        } else {
            throw new Error("ERROR! This is not a string!");
        }
    } catch (e) {
        return e;
    }
}
console.log("\nTask 3:");
console.log(reverseString("How are you?"));
console.log(reverseString(15));
console.log(reverseString(true));


/* 4. Comparing Arrays
Create a function that returns true if two arrays contain identical values, and false otherwise.
Someone wrote the following code:
Why doesn't the code work?
Fix the code (or restart) to solve the problem.
*/

function compareArrays(arr1, arr2) {
    if (arr1.join() === arr2.join()) {
        return true;
    } else {
        return false;
    }
}

console.log("\nTask 4:");
console.log(compareArrays([1, 2], [1, 3])); // false
console.log(compareArrays([1, 2], [1, 2])); // true
console.log(compareArrays([4, 5, 6], [4, 5, 6])); // true
console.log(compareArrays([4, 7, 6], [4, 5, 6])); // false 


//5 Recursion

function sum(array) {
    if (array.length === 0) { // base case 
        return 0;
    } else {
        //return array[0] + sum(array.slice(1)); //adding the first element to the sum of the remainder of the array
        let result = array.pop() + sum(array);
        return result;
    }
}
console.log("\nTask 5:");
console.log(sum([1, 2, 3])); //6
console.log(sum([]));
console.log(sum([0, 25, -8]));






/* 1 + sum([2,3])
    1 + 2 + sum([3])
        1 + 2 + 3 + sum([])
            1 + 2 + 3 + 0  -> 6  */