'use strict;'

//0
let a = false;
let b = false;

//1
//a) 
console.log(
    (a && b) ? "both true" : "at least one if false"
);

//b)
console.log(
    (a || b) ? "at least one is true" : "both are false"
);

//c)
console.log(
    !(a && b) ? "both are false or at least one" : "both true"
);

//2
let x = 5;
let y = 10;
let z = 15;

//3
//a x is greater than z AND x is greater than y.
console.log(
    ((x > z) && (x > y)) ? "x is bigger than z abd y and the same time" : "x is bigger only then z or y or less than they"
);

//b x is NOT equal to y
console.log(
    (x != y) ? "x is not equal to y" : "x is equal to y"
);

//c z is less than y OR z is greater than x
console.log(
    ((z < y) || (z > x)) ? "at least one of conditions is true" : "both conditions are false"
);

//d x is equal to z OR x is NOT equal to y
console.log(
    ((x === z) || (x != y)) ? "at least one of conditions is true" : "both conditions are false"
);

//e x is greater than or equal to 10 AND y is less than or equal to 10
console.log(
    ((x >= 10) && (y <= 10)) ? "both conditions are true" : "both conditions or one of them is false"
);

//f x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100
console.log(
    (((x * z) < 100) || ((x * y) > 100)) ? "at least one of conditions is true" : "both conditions are false"
);