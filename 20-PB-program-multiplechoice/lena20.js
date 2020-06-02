'use strict';

//1 Color Analyzer
let color = 'yellow';

switch (color) {
    case 'red':
        console.log(`It is ${color} like a watermelon inside.`);
        break;
    case 'blue':
        console.log(`It is ${color} like an ocean.`);
        break;
    case 'green':
        console.log(`It is ${color} like a frog.`);
        break;
    case 'yellow':
        console.log(`It is ${color} like busses in Berlin.`);
        break;
    default:
        console.log(`Sorry, I do not know what is ${color}.`);
}

//2 Grading
let mark = 3;

switch (mark) {
    case 1:
        console.log('Excellent. You have successfully completed between 90 and 100% of the material required in the exam.');
        break;
    case 2:
        console.log('Overall very good. However, you need to work more in specific study areas.');
        break;
    case 3:
        console.log('Good. Your achievement is satisfying, but there is room for improvement.');
        break;
    case 4:
        console.log('Adequate.');
        break;
    case 5:
        console.log('Sufficient to pass the exam, but very poor otherwise.');
        break;
    case 6:
        console.log(`Insufficient. You have shown insufficient knowledge to pass the exam you sat.`);
        break;
    default:
        console.log(`Why were you not present on an exam?`);
}

//3 Fruits
let fruit = 'Strawberry';

switch (fruit) {
    case 'Banana':
        console.log(`${fruit} is a healthy source of fiber, potassium, vitamin B6, vitamin C, and various antioxidants and phytonutrients.`);
        break;
    case 'Orange':
        console.log(`${fruit} is a healthy source of fiber, vitamin C, thiamine, folate, and antioxidants. They have multiple health benefits.`);
        break;
    case 'Strawberry':
        console.log(`${fruit} is an excellent source of vitamin C and manganese and also contain decent amounts of folate (vitamin B9) and potassium.`);
        break;
    case 'Apple':
        console.log(`${fruit} are high in fiber, vitamin C, and various antioxidants. They are also very filling, considering their low calorie count.`);
        break;
    default:
        console.log(`Sorry, I do not know about ${fruit}, but must be healthy.`);
}

//4 Percentage Complete. 
let percentageComplete = 81;

if (percentageComplete < 30) {
    console.log('Still a long way to go');
} else if (percentageComplete >= 30 && percentageComplete <= 50) {
    console.log('Slowly getting there');
} else if (percentageComplete > 50 && percentageComplete <= 80) {
    console.log('You can do it!');
} else if (percentageComplete > 80 && percentageComplete <= 99) {
    console.log('This is the last push!');
} else if (percentageComplete === 100) {
    console.log('You\'re there. Well done!');
} else {
    console.log('Something went wrong');
}


//5 Differences
//Switch case is for easy comparisons, it can not check for greater or less or check many conditions at the same time like we can with 'if ...else' (using && or ||). I think switch is good like in task with fruits or colors (it will go quicker, when condition is true break will stop it)