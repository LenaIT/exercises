'use strict';

const child = document.querySelector('cite');
let currentTarget = child;
const parentList = [];

while (currentTarget.parentElement) {
    parentList.push(currentTarget.parentElement.nodeName.toLowerCase());
    currentTarget = currentTarget.parentElement;
}
console.log(...parentList.reverse());
console.log(...parentList.join(">"));


