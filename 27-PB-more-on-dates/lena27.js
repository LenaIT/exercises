'use strict';

/* // how many days in month

function calculateDaysInMonth(year, month) {
    let monthDays = new Date(year, month + 1, 0);
    return monthDays.getDate();
}

let numberOfDays = calculateDaysInMonth(2020, 5);
console.log(numberOfDays);

// how many days util end of month

function calculateDaysUntilEndOfMonth(yourDate) {
    let untilEndMonth = numberOfDays - yourDate.getDate();
    console.log(`Until the end of month ${yourDate.getMonth() + 2} is ${untilEndMonth} days`);
}
const myDate = new Date('2020-05-08');
calculateDaysUntilEndOfMonth(myDate);
 */

//refactoring to one function

function calculateDays(userDate) {
    let days = new Date(userDate.getFullYear(), userDate.getMonth() + 1, 0);
    let monthDays = days.getDate();
    console.log(monthDays);
    let untilEndMonth = monthDays - userDate.getDate();
    console.log(`Until the end of month ${userDate.getMonth() + 1} is ${untilEndMonth} days`);
}
const userDate = new Date(2020, 5, 9);
calculateDays(userDate);