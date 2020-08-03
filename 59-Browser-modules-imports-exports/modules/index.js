// Your code goes here!
import {
    modulo,
    percentage,
    percentageOf,
    difference
} from "./percentage.js";

import {
    calculateAspectRatio
} from "./aspect-ratio.js";


//modulo
const moduloNumber1 = document.getElementById('modulo_1');
const moduloNumber2 = document.getElementById('modulo_2');
const moduloAnswer = document.getElementById('modulo_result');

moduloNumber2.addEventListener("keyup", () => {
    let firstResult = modulo(moduloNumber1.value, moduloNumber2.value);
    moduloAnswer.value = firstResult;
})


// Percentage Calculations
const percNumber1 = document.getElementById('percentage_1');
const percNumber2 = document.getElementById('percentage_2');
const percAnswer = document.getElementById('percentage_result');

percNumber2.addEventListener("keyup", () => {
    let secondResult = percentage(percNumber1.value, percNumber2.value);
    percAnswer.value = secondResult;
})

//Percentage Of
const percNumber1Of = document.getElementById('percentageOf_1');
const percNumber2Of = document.getElementById('percentageOf_2');
const percAnswerOf = document.getElementById('percentageOf_result');

percNumber2Of.addEventListener("keyup", () => {
    let thirdResult = percentageOf(percNumber1Of.value, percNumber2Of.value);
    percAnswerOf.value = thirdResult;
})

//Difference
const percNumber1Differ = document.getElementById('difference_1');
const percNumber2Differ = document.getElementById('difference_2');
const percAnswerDiffer = document.getElementById('difference_result');

percNumber2Differ.addEventListener("keyup", () => {
    let fourthResult = difference(percNumber1Differ.value, percNumber2Differ.value);
    percAnswerDiffer.value = fourthResult;
})

//Aspect Ratio 
const aspectOriginalWidth = document.getElementById('ratio_1');
const aspectOriginalHeight = document.getElementById('ratio_2');
const aspectNewWidth = document.getElementById('ratio_result-width');
const aspectNewHeight = document.getElementById('ratio_result-height');

aspectNewWidth.addEventListener("keyup", () => {
    let fifthResult = calculateAspectRatio(aspectOriginalWidth.value, aspectOriginalHeight.value, aspectNewWidth.value, "h");
    aspectNewHeight.value = fifthResult;
})

aspectNewHeight.addEventListener("keyup", () => {
    let fifthResult1 = calculateAspectRatio(aspectOriginalWidth.value, aspectOriginalHeight.value, aspectNewHeight.value, "w");
    aspectNewWidth.value = fifthResult1;
})