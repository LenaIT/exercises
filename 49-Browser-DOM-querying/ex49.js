'use strict';

//from Vincenzo
// selectors

const header = document.querySelector('.title');
const body = document.querySelector('body');
const sectionHeadings = document.getElementsByClassName('category');
const foodCategory = document.querySelectorAll('.food-category');
const main = document.querySelector('main');
const warningText = document.getElementById('warning');
const allergyInfos = document.querySelectorAll('.allergy-info');
const allergySection = document.querySelector('.allergies');
const foodDesc = document.querySelectorAll('.food-desc');
const footer = document.querySelector('.footer');

//Change the font of the body element.
body.style.fontFamily = 'Arial';

//Center the text of h1 on the page.
header.style.textAlign = 'center';

//The menu headings have a class named category. Select the elements by class name. Then, change the color and font-style of each element

for (let i = 0; i < sectionHeadings.length; i++) {
    sectionHeadings[i].style.fontSize = '2rem';
    sectionHeadings[i].style.textDecoration = 'underline';
    sectionHeadings[i].style.fontStyle = 'italic';
}

//Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created.

const colorGenerator = (element) => {
    const colors = [
        '#7f8fa6',
        '#9c88ff',
        '#e1b12c',
        '#ff7f50',
        '#7bed9f',
        '#70a1ff'
    ]
    const randomNumber = Math.floor(Math.random() * colors.length);
    return element.style.backgroundColor = colors[randomNumber];
}

for (let child of foodCategory) {
    for (let elements of child.children) {
        elements.style.margin = '20px 0px';
    }
    child.style.MarginBottom = '20px';
    child.style.height = '200px';
    child.style.width = '250px';
    child.style.margin = '10px auto';
    child.style.paddingTop = '5px';
}

colorGenerator(foodCategory[0]);
colorGenerator(foodCategory[1]);
colorGenerator(foodCategory[2]);


//Align the food-category lists in a row on desktop. Make sure that the page is responsive and also works on mobile.

main.style.display = 'flex';
main.style.flexWrap = 'wrap';
main.style.gap = '10px';
main.style.width = '80%';
main.style.maxWidth = '900px';
main.style.margin = 'auto';

//Select the warning at the end of the page by its id warning. Select the id without using a querySelector. Change the size and font of the warning.
warningText.style.fontSize = '1.5rem';
warningText.style.textAlign = 'center';

//Select all even allergy-info items. Give the even items a different background color.Make the allergy-warning appear as a column in the center of the page
allergySection.style.listStyleType = 'none';
allergySection.style.width = '300px';
allergySection.style.margin = 'auto';
allergySection.style.paddingLeft = '0px';

for (let i = 1; i < allergySection.children.length; i += 2) {
    allergySection.children[i].style.background = 'lightblue';
}


//The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.
for (let i = 0; i < foodDesc.length; i++) {
    foodDesc[i].style.background = '#ccc';
    foodDesc[i].style.width = '120px';
    foodDesc[i].style.height = '120px';
    foodDesc[i].style.borderRadius = '50%';
    foodDesc[i].style.display = 'flex';
    foodDesc[i].style.justifyContent = 'center';
    foodDesc[i].style.alignItems = 'center';
    foodDesc[i].style.margin = '20px auto';
    foodDesc[i].style.border = '5px solid orange';
}

footer.style.display = 'flex';
footer.style.width = '60%';
footer.style.maxWidth = '500px';
footer.style.margin = 'auto';
footer.style.justifyContent = 'center';
footer.style.flexWrap = 'wrap';


//from Marcel
let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let category = [...document.getElementsByClassName("category")]
let main = [...document.getElementsByClassName("main")]
let foodCategory = [...document.getElementsByClassName("food-category")]
let warning = document.getElementById('warning')
let allergyInfo = document.querySelectorAll(".allergies li:nth-child(even)")
let allergies = [...document.getElementsByClassName("allergies")]
let foodDesc = [...document.getElementsByClassName("food-desc")]
let footer = [...document.getElementsByClassName("footer")]

// let color;
const colorGenerator = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 8; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

category.forEach(element => {
    element.style.color = 'red';
    element.style.fontStyle = 'italic';
});

allergies.forEach(element => {
    element.style.width = '500px';
    element.style.margin = 'auto'
});

main.forEach(element => {
    element.style.display = 'flex'
    element.style.flexWrap = 'wrap'
});

foodCategory.forEach(element => {
    element.style.width = '27%'
    element.style.minWidth = '300px'
    element.style.padding = '20px'
    element.style.margin = '10px'
    element.style.paddingLeft = '50px'
    element.style.backgroundColor = colorGenerator();
});

allergyInfo.forEach(element => {
    element.style.background = 'purple'
});



foodDesc.forEach(element => {
    element.style.width = '300px';
    element.style.margin = '50px';
    element.style.borderRadius = '50px';
    element.style.height = '300px';
});

body.style.fontSize = "2rem"
h1.style.textAlign = "center"
warning.style.fontSize = '40px'
warning.style.color = 'red'
footer.style.display = 'flex' 