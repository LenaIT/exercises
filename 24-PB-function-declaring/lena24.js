'use strict';

//1 Function Declaration
function multiplyTwoNumbers(a, b) {
    console.log(a * b);
}
multiplyTwoNumbers(3, 5); //15
multiplyTwoNumbers(-2, 2.5); //-5

//2  Function Declarations as Values
const multiplyNumbers = function (a, b) {
    console.log(a * b);
};
multiplyNumbers(3, 5); //15
multiplyNumbers(-2, 2.5); //-5

//3 Arrow Function
const multiply = (a, b) => {
    console.log(a * b);
};
multiply(3, 5); //15
multiply(-2, 2.5); //-5

//4 Declarations
//4.1
function checkRemainder(a, b) {
    let rest = a % b;
    (rest === 0) ? console.log(`No remainder`): console.log(`The remainder is ${rest}`);
}
checkRemainder(12, 12);
checkRemainder(8, 3);

//4.2
const remainderCheck = function (a, b) {
    let rest = a % b;
    (rest === 0) ? console.log(`No remainder`): console.log(`The remainder is ${rest}`);
}
remainderCheck(25, 25);
remainderCheck(100, 30);

//4.3
const checkModulo = (a, b) => {
    let rest = a % b;
    (rest === 0) ? console.log(`No remainder`): console.log(`The remainder is ${rest}`);
}
checkModulo(15, 12);
checkModulo(50, 50);