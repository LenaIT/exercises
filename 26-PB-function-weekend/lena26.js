'use strict';

function checkWeekDay(day) {
    if (day.getDay() === 0 || day.getDay() === 6) {
        console.log('It is weekend!');
    } else {
        console.log('No, it is not weekend!Go study!');
    }
}
//1 better way, "more professional" 
const currentDay = new Date('2020-06-12');
checkWeekDay(currentDay);

//2
checkWeekDay(new Date('2020-06-14'));