'use strict';
//1
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    myFunction: function () {
        console.log(`1: ${this.firstName} ${this.lastName} is a student in class ${this.class}`);
    }
};
student.myFunction();

//console.log(`1: ${student.firstName} ${student.lastName} is a student in ${student.class}`);

//2 Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    city: "Paris",
    country: "France",
    myFunction: function () {
        console.log(`2: ${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city} in ${this.country}.`);
    }
};
person.myFunction();

//console.log(`2: ${person.firstName} ${person.lastName} is a ${person.age} year old ${person.job} living in ${person.city} in ${person.country}.`);

//3 Write a method to get the length of the person object.

console.log("3: ", Object.keys(person).length);