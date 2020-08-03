'use strict';

const form = document.querySelector('form');
const passwordField = document.getElementById('password');
const numberCharacters = document.querySelector('#number_characters');
const checkbox = document.querySelector('#mixed');
const button = document.querySelector('.form_btn');
const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';

//console.log(charset.indexOf('z'));
/* 
let number;
let mixedCharset;
let password = ""; */

//change color of button
button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = "lightgreen"
    button.style.transition = "0.3s all"
});
button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = "green"
    button.style.transition = "0.3s all"
});

//number of characters in password
numberCharacters.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
    const value = e.target.value
    numberCharacters.value = value
}

// prevent default and connect button and box for password
form.addEventListener('submit', e => {
    e.preventDefault()
    const length = numberCharacters.value
    const mixedCase = checkbox.checked
    const password = generatePassword(length, mixedCase)
})

/* const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
const bigLetters = 'ABCDEFGHIKLMNOPQRSTVXYZ';
let mixedCharset = charset;

function fromLowToUpper(str, strBig) {

    for (let i = 0; i < 25; i + 3) {
        mixedCharset.replace(str[i], strBig[i])
    }
    return mixedCharset
}
fromLowToUpper(charset, bigLetters)
console.log(mixedCharset); */

function generatePassword(length, mixedCase) {

}

/* function generatePassword( length,  mixedCase) {
    if (mixedCase) {
        for (let i = 0; i < charset.length; i++) {
            if (i % 3 === 0) {
                charset[i].toUpperCase();
            }
        }
        return console.log(charset);
    }
}


generatePassword( numberCharacters,  choice);


function generatePassword( length,  number) {
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
    if (number === 5) {
        for (let i = 0; i < charset.length; i++) {
            if (i % 3 === 0) {
                charset.replace(charset[i], charset[i].toUpperCase())
            }
        }
        return console.log(charset);
    }
}
generatePassword(5); */

//number of characters in password
/* numberCharacters.addEventListener('input', updateValue);

function updateValue(e) {
    e.preventDefault()
    number = e.target.value;
    console.log(number);
} */



/* 
numberCharacters.addEventListener('input', (e) => {
    e.preventDefault();
    number = e.target.value;
    console.log(number);
});


button.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < number; i++) {
        let random = Math.round(Math.random() * 52 + 1);
        //console.log(charset.length);
        console.log(random);
        checkbox.addEventListener("change", (e) => {
            //to check whether checkbox is checked or not
            if (e.target.checked) {
                mixedCharset = charset.slice(0, 15).toUpperCase() + charset.slice(16);
                console.log(mixedCharset);
                password += mixedCharset[random];
                console.log(password);
            } else {
                password += charset[random];
                console.log(password);
            }
        });
    }
    passwordField.value = password;
    //console.log(passwordField.value);
});



//button.addEventListener('click', generator); */