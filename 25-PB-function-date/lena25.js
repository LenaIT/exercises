'use strict';

const userName = 'Petra';
const currentDay = new Date();
const bookingDay = new Date('2020-06-12');

console.log(currentDay, bookingDay);

function bookEvent(name, today, yourDate) {
    if (yourDate > today) {
        console.log(`${name}, your book to the event for the ${yourDate.getDate()}th ${yourDate.getMonth() + 1} ${yourDate.getFullYear()}  is already guaranteed!`)
    } else {
        console.log(`You should select a future date.`);
    }
}
bookEvent(userName, currentDay, bookingDay);

const userName2 = 'Anton';
const currentDay2 = new Date();
const bookingDay2 = new Date('2020-06-07');

bookEvent(userName2, currentDay2, bookingDay2);



/* function bookEvent(name, today, yourDate) {
    if (yourDate > today) {
        console.log(`${name}, your book to the event for the ${yourDate.getDate()}th ${yourDate.getMonth() + 1} ${yourDate.getFullYear()}  is already guaranteed!`)
    } else {
        console.log(`You should select a future date.`);
    }
}
bookEvent('Maria', new Date(), new Date('2020-06-12')); */