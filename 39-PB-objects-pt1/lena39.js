'use strict';
//1. Create an object named person. Loop through the object and print both the property and value of the object.

const person = {
    name: "Maria",
    lastName: "Schmidt",
    age: 48,
    city: "Hamburg",
    profession: "doctor",
    pets: true
}

console.log("Task 1:");
//first variant for ..in
for (const key in person) {
    console.log(key + ": " + person[key]);
}

//another variant Object.entries(person)
console.log("1a:");
for (const [key, value] of Object.entries(person)) {
    console.log(key + ":", value);
}

//2 Create a function that returns an array of all **values** of an object's properties.

const drinks = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
    choice4: "juice",
    choice5: "water"
}

function getObjectValues(obj) {
    console.log(Object.values(obj));
}
console.log("\nTask 2:");
getObjectValues(drinks);

//3 Create an object and add a method to that object which prints the values of the objects in a string.

const anotherPerson = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    myFunction: function () {
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}.`);
    }
};
console.log("\nTask 3:");
anotherPerson.myFunction();

//Bonus
console.log("\nBonus Questions:");

//1 Create a function that converts an object into an array of keys and values
const pets = {
    cats: 1,
    dogs: 2,
    turtles: 4
}

function objectToArray(obj) {
    console.log(Object.entries(obj));
}
objectToArray(pets);


//2 Create a function that returns an array of **properties** of a javascript object. 
const student = {
    name: "Mike",
    class: "4A",
    course: "English"
}

function arrOfProperties(obj) {
    console.log(Object.keys(obj));
}
arrOfProperties(student);


//3 Create a function that takes two objects as its parameters and merges them together into a new object.

const first = {
    firstName: "John",
};
const last = {
    lastName: "Smith",
    age: 25,
    city: "Berlin"
};

function mergeTwoObj(obj1, obj2) {
    let mergedArr = {
        ...obj1,
        ...obj2
    };
    console.log(mergedArr);
}

mergeTwoObj(first, last);

//What happens if you merge two objects with the same property values? 
//Answer: If objects have a property with the same name, then the right-most object property overwrites the previous one.

//In merging these two objects, do you expect to change either or both of the original objects? Why or why not? 
//Answer: Original objects will not be changed
//console.log(first, last);


//4 Create a function to get a copy of an object. The copy must switch the keys and values.
const user = {
    name: "John",
    job: "teacher"
}

function objectFlip(obj) {
    const ret = {};
    Object.keys(obj).forEach(key => {
        ret[obj[key]] = key;
    });
    return ret;
}
console.log(objectFlip(user));

//5 Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

const numbers = {
    a: 1,
    b: 2,
    c: 3
};
//[["a", "b", "c"], [1, 2, 3]]
const booleans = {
    key: true
};
// [["key"], [true]]

function twoArrays(obj) {
    const myKeys = Object.keys(obj);
    const myValues = Object.values(obj);
    console.log(myKeys, myValues);
}

twoArrays(numbers);
twoArrays(booleans);