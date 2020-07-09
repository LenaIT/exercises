'use strict';
let answerNumber = 4;
let userNumber;

for (let i = 1; i <= 3; i++) {
    userNumber = +prompt("Guess a number between 1-10:", "");
    if (userNumber >= 1 && userNumber <= 10) {
        if (userNumber === answerNumber) {
            alert(`Success!The number was ${answerNumber}. Attempts: ${i}`);
            break;
        } else {
            alert("Nope, sorry! Try again!");
        }
    } else {
        alert("Error!Nimber should be between 1 and 10!");
    }
}

if (answerNumber !== userNumber) {
    alert(`Sorry, you failed to guess the number in three attempts. The number was ${answerNumber}!`);
}