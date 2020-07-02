'use strict';

//1 Person Class
/* Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old". */

class Person {
    constructor(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
        this.describe = function () {
            return `${this.userName}, ${this.userAge} years old.`;
        }
    }
}

console.log("Task 1:");
const firstUser = new Person('John', 19);
console.log(firstUser);
console.log(firstUser.describe());
const secondUser = new Person('Maria', 28);
console.log(secondUser);
console.log(secondUser.describe());


//2 Volume
/* Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.
Note: Volume of a cylinder : V = πr^2h - r is the radius and h is the height of the cylinder. */

class VolumeCylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
        this.calcVolume = function () {
            const volume = Math.PI * this.radius ** 2 * this.height;
            const result = volume.toFixed(4);
            return `The volume of your cylinder is ${result}`;

            //shorter
            //return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
        }
    }
}

console.log("\nTask 2:");
const firstCylinder = new VolumeCylinder(8, 30);
console.log(firstCylinder);
console.log(firstCylinder.calcVolume());
const secondCylinder = new VolumeCylinder(12, 45);
console.log(secondCylinder);
console.log(secondCylinder.calcVolume());
