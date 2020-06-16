// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.
//
// Example: Calling the function with 2 and 4 will return 8 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).

'use strict';

//not need a loop, we know how many arguments in function
/* const exponent = (num, exp = 2) => {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= num;
  }
  return result;
}; */

const exponent = (num, exp = 2) => num ** exp;

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9
console.log(exponent(2, 4)); // 16
console.log(exponent(2)); // 4