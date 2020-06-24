'use strict';

//1
//without nested loop
let arr1 = ["*", "*", "*", "*"];
let line = "";
for (let i = 0; i < arr1.length; i++) {
    line += arr1[i] + " ";
    console.log(line);
}

//with nested loop
let arr1A = [
    ["*"],
    ["* *"],
    ["* * *"],
    ["* * * *"]
];

for (let i = 0; i < arr1A.length; i++) {
    for (let j = 0; j < arr1A[i].length; j++) {
        console.log(arr1A[i][j]);
    }
}

//with function 
let levels = 4;

function draw(star) {
    let line = "";
    for (let i = 0; i < levels; i++) {
        for (let j = 0; j < i; j++) {
            line += star + " ";
            console.log(line);
        }
    }
}
draw("*");

//from Andrea
const halfTree = (character, lines) => {
    let array = [];
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < i; j++) {
            array.push(character);
            console.log(array.join(" "));
        }
    }
}
console.log("Task 1: Tree");
halfTree("*", 4);

// build a half pyramid with return
const halfPyramid = (lines) => {
    let array = [];
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j <= i; j++) {
            array.push("*"); // the amount of stars per line
            console.log(array);
        }
        array.push("\n"); // insert a new line break special character
    }
    return " " + array.join(" ");
}
console.log("Task 1: Pyramid");
console.log(halfPyramid(4));

// mohameds number pyramid
function mohamedsPyramid(lines) {
    let string = '';
    for (let i = 0; i < lines; i++) { // forwards
        for (let j = i; j >= 0; j--) { // backwards accordingly to i
            string += j + " ";
        }
        string += "\n"; // new line break
        //console.log(string);
    }
    return string;
}
console.log(mohamedsPyramid(10));

//2
let arr2 = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

for (let i = 0; i < arr2.length; i++) {
    console.log(`row ${i}`);
    for (let j = 0; j < arr2[i].length; j++) {
        console.log(" " + arr2[i][j]);
    }
}


//3
/* 1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 */

let arr = ([0, 1, 2, 3, 4]);
let line1 = "";
let line2 = "";
//first line
for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < 3; j++) {
        line1 += arr[i] + " ";
    }
}
console.log(line1);

//second line
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < arr.length; j++) {
        line2 += arr[j] + " ";
    }
}
console.log(line2);

//like a function
function lines(arr) {
    let line1 = "";
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < 3; j++) {
            line1 += arr[i] + " ";
        }
    }
    console.log(line1);
    let line2 = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < arr.length; j++) {
            line2 += arr[j] + " ";
        }
    }
    console.log(line2);
}
lines([0, 1, 2, 3, 4]);

//from Martina
arr = [];
for (let i = 1; i <= 4; i++) {
    for (let y = 1; y <= 3; y++) {
        let strNums = i.toString();
        arr.push(strNums);
    }
}
console.log(arr.join(" "));
arr = [];
for (let i = 0; i <= 5; i++) {
    for (let y = 0; y <= 4; y++) {
        strNums = y.toString();
        arr.push(strNums);
    }
}
console.log(arr.join(" "));

//Vincenzo
const printNumbers = () => {
    let arrayOne = [];
    let arrayTwo = [];
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (j !== 0 && j !== 4) {
                arrayOne.push(i);
            }
            arrayTwo.push(j);
        }
    }
    console.log(arrayOne.join(" "));
    console.log(arrayTwo.join(" "));
}
printNumbers();