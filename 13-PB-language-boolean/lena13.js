'use strict;'

//1
console.log(3 == "3");
//true (content is equal, different data type for loose comparison is true (number 3 will be convert in string))
console.log(3 === "3");
//false (content and type were checked, different data types so false)

//== check content; === check content and data type
// To avoid mistakes we should generally use === 
// = is not for compare (will be SyntaxError: Invalid left-hand side in assignment ), it will be used for assign a value

//2
let a = true;
console.log(!a ? true : false); //false

//3
let firstName, givenName;
firstName = "Stacey";
let name = givenName || firstName || "John";
console.log(name);
//Stacey. first will be checked givenName-falsy(it is undefined, we did not assign any value to this variable), after will be checked firsName -truthy