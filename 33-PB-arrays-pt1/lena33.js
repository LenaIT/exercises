'use strict';

//1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondVariable = euroCities[1];
console.log("1:", secondVariable); //London


//2. Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";
console.log("2:", euroCities);


//3. Print the length of the array "euroCities".
console.log("3:", euroCities.length); //5


//4. Remove the last item of the array "euroCities".
euroCities.pop();
console.log("4:", euroCities);


//5. Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest");
console.log("5:", euroCities);


//6. Bonus: Remove the second and third items from the euroCities array.
/* splice.<arrName>(begin of delete, end of delete) - delete an element(s) in array and empty space also.Delete leaves empty space in array.Also can replace elements with and without delete and return deleted elements  */

euroCities.splice(1, 2);
console.log("6:", euroCities);


//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = ["Tokyo", "Shanghai", "Manila", "Jakarta", "Kuala Lumpur"];
console.log("7:", asianCities);


//8. Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
/* arr.slice(start,end) - return a new array, in which copies elements from start to end(do not include end)Can be negative(will count from the end of array) */

const partAsia = asianCities.slice(1, 4);
console.log("8:", partAsia);


//9. Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
/* arr.concat() - create a new array where copy elements of different arrays and can add a new elements */

const worldCities = euroCities.concat(asianCities);
console.log("9:", worldCities);


//10. Reverse the order of worldCities.

console.log("10:", worldCities.reverse());


//11. Bonus: Replace the 3rd item in the array of worldCities with "Toronto".

worldCities.splice(2, 2, "Toronto")
console.log("11:", worldCities);


//12. Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(1, 0, "Washington");
console.log("12:", worldCities);

//13. Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
/* join(devider=glue) -creat a string from arr elements */

const arrInStr = worldCities.join(" + ");

console.log("13:", arrInStr);
console.log(typeof (arrInStr));

//Bonus Write a program to reverse the string: "Hello World"

const myStr = "Hello World";
const strInArray = myStr.split(" ");
console.log(strInArray);
const arrReverse = strInArray.reverse();
console.log(arrReverse, typeof (arrReverse));
const strReverse = strInArray.join(" ");
console.log(strReverse, typeof (strReverse));