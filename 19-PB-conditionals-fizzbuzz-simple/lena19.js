'use strict';

//FizzBuzz

let myNumber = 50; //case "Buzz"
//myNumber = 15; //case "Fizzbuzz"
//myNumber = 27; //case "Fizz"
//myNumber = 34; //case else 

if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log("FizzBuzz");
} else if (myNumber % 5 === 0) {
    console.log("Buzz");
} else if (myNumber % 3 === 0) {
    console.log("Fizz");
} else {
    console.log(myNumber);
}

//switch
//With switch I have not found any way to use modulo in condition