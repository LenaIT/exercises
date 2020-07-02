'use strict';

//1 Person Class
/* Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old". */

class Person {
    constructor(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
        this.describe = function () {
            return `${this.userName}, ${this.userAge} years old.`;
        };
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
        /* this.calcVolume = function () {
            const volume = Math.PI * this.radius ** 2 * this.height;
            const result = volume.toFixed(4);
            return `The volume of your cylinder is ${result}`;

            //shorter
            //return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
        }; */
    }
    calcVolume() {
        const volume = Math.PI * this.radius ** 2 * this.height; //hidden function, better way
        const result = volume.toFixed(4);
        return `The volume of your cylinder is ${result}`;
    }
}

console.log("\nTask 2:");
const firstCylinder = new VolumeCylinder(8, 30);
console.log(firstCylinder);
console.log(firstCylinder.calcVolume());
const secondCylinder = new VolumeCylinder(12, 45);
console.log(secondCylinder);
console.log(secondCylinder.calcVolume());


/* 4. TV Class
Create a TV class with properties like brand, channel and volume.
Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
Add a method to set the channel randomly. Let's say the TV has only 50 channels.
Add a method to reset TV so it goes back to channel 1 and volume 50.
It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
*/

class TV {
    constructor(brand = "Panasonic", channel, volume) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }

    increaseVolume = () => {
        if (this.volume >= 100) {
            console.log("Max volume reached!");
        } else {
            this.volume++;
            console.log("Volume up!", this.volume);
        }
    }

    decreaseVolume = () => {
        if (this.volume <= 0) {
            console.log("Min volume reached!");
        } else {
            this.volume--;
            console.log("Volume Down!", this.volume);
        }
    }
    setChannel(min, max) {
        // max = 50; min = 1
        min = Math.ceil(min);
        max = Math.floor(max);
        return this.channel = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    checkStatus() {
        return (`${this.brand} at channel ${this.channel}, volume ${this.volume}.`);
    }
    resetTV() {
        this.volume = 50;
        this.channel = 1;
    }
}

console.log("\nTask 4:");
const firstTV = new TV("Samsung", 5, 125);
console.log(firstTV);
console.log(firstTV.checkStatus());
firstTV.increaseVolume();
firstTV.increaseVolume();
firstTV.increaseVolume();
console.log(firstTV.checkStatus());
firstTV.decreaseVolume();
firstTV.decreaseVolume();
console.log(firstTV.checkStatus());
firstTV.setChannel(1, 50);
console.log(firstTV.checkStatus());
firstTV.resetTV();
console.log(firstTV.checkStatus());