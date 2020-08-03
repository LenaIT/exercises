'use strict';

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");
const total = document.querySelector('#total');
const current = document.querySelector('#current');

// counter 06
if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = slides.length;
}

function showSlides(n) {
    //loop of slides
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    //to hide img
    slides.forEach((item) => item.style.display = 'none');
    //to show img
    slides[slideIndex - 1].style.display = 'block';

    // current number
    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
}
//human numbers
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', function () {
    plusSlides(-1);
});

next.addEventListener('click', function () {
    plusSlides(1);
});