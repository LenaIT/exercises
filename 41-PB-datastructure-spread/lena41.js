'use strict';

//1 Combining Arrays
//Create two arrays. Add asianCountries items to the end of euroCountries array.
const euroCountries = ["Germany", "Croatia", "Malta", "Ukraine", "Slovenia"];
const asianCountries = ["Japan", "Singapore", "Laos", "Thailand"];
for (const element of asianCountries) {
    euroCountries.push(element);
}
console.log("Task 1:");
console.log(euroCountries);

//Save all elements of both arrays to another variable.
const euroCountries1 = ["Germany", "Croatia", "Malta", "Ukraine", "Slovenia"];
const asianCountries2 = ["Japan", "Singapore", "Laos", "Thailand"];
const countries = euroCountries1.concat(asianCountries2);
console.log(countries);

/* const newArrayCountries = [...euroCountries];
console.log(newArrayCountries);
newArrayCountries.push("Australia");
console.log(newArrayCountries);
console.log(euroCountries); */

//2. Copying Arrays
//Copy an array using the spread operator. Store the copied array in another variable.
const euroCities = ["Berlin", "Paris", "Prague", "Ljubljana", "Porto"];
const newCities = [...euroCities];
console.log("\nTask 2: ", newCities);

//3. Find the Largest...
//Create a function to find the largest number in an array.

function findLargest(arr) {
    let max = Math.max(...arr);
    return max;
}
const myNumbers = [1, 3, 5, 15, 28, 304, 1005, 2, 12];
console.log("\nTask 3: ", findLargest(myNumbers));

//with loop
let largest = 0;
for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] > largest) {
        largest = myNumbers[i];
    }
}
console.log(largest);

//4. Find the Smallest
//Create a function to find the smallest number in an array.

function findSmallest(arr) {
    return Math.min.apply(null, arr);
}

console.log("\nTask 4: ", findSmallest(myNumbers));

//5 5. Clone and Merge
//5.1 Clone the person object.
const person = {
    name: "John"
};
const job = {
    role: "Teacher"
};

const clonePerson = {
    ...person
};
console.log("\nTask 5: ", clonePerson);
//5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = {
    ...person,
    ...job
};
console.log(employee);

//5.3 Then change the values of the properties in the employee object.
employee["name"] = "Alex";
employee["role"] = "Doctor";
console.log(employee);

//Bonus: 6. Is the average a whole number?