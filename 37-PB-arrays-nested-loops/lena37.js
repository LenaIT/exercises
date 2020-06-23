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
        console.log(arr2[i][j]);
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