'use strict';

const body = document.querySelector('body');
body.style.fontSize = '1.5em';
body.style.textAlign = 'center';
body.style.marginTop = '5%';

const inp = document.querySelector('input');
inp.style.width = '30%';
inp.style.height = '35px';
inp.style.borderRadius = '10px';
inp.style.fontSize = '20px';

const button = document.querySelector('button');
button.style.width = '10%';
button.style.height = '35px';

inp.addEventListener("focus", () => {
    inp.style.backgroundColor = "lightgreen";
    inp.style.borderRadius = '10px';
    inp.style.outline = 'none';
});


let header = document.querySelector('p');
let myDate = new Date();
let myDay = myDate.getDay();
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
/* console.log(weekDay[myDay])
console.log(weekDay.indexOf('Saturday'))
console.log(weekDay.indexOf(weekDay[myDay])) */
let dayLeft = weekDay.indexOf('Saturday') - weekDay.indexOf(weekDay[myDay]);

button.addEventListener("click", () => {
    let name = inp.value;
    header.textContent = `Hello ${name}. Today is ${weekDay[myDay]}. Only ${dayLeft} days left until the Weekend!`

    inp.style.backgroundColor = "white";
    inp.value = ""; 
});

