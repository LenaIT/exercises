'use strict';

//Change the font of the body element.
const body = document.querySelector('body');
body.style.fontFamily = 'Arial';

//Center the text of h1 on the page.
const mainHeader = document.querySelector('.title');
mainHeader.style.textAlign = 'center';

//The menu headings have a class named category. Select the elements by class name. Then, change the color and font-style of each element.

const menuHeadings = [...document.getElementsByClassName('category')];
menuHeadings.forEach(item => {
    item.style.color = 'green';
    item.style.fontWeight = 'bold';
    item.style.fontStyle = 'italic';
});

//Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created.
const foodCategory = [...document.getElementsByClassName("food-category")];

function colorGenerator() {
    const bgColors = ["blue", "orange", "yellow", "red", "green", "gray", "violet"];
    foodCategory.forEach(item => {
        item.style.backgroundColor = bgColors[Math.floor(Math.random() * 7 + 1)];
        item.style.opacity = Math.random();
        item.style.margin = '30px';
        item.style.padding = '20px';
        item.style.width = '20%';
        item.style.textAlign = 'center';
        item.style.listStyleType = 'none';
    });
}
colorGenerator();

//Align the food-category lists in a row on desktop. Make sure that the page is responsive and also works on mobile.
const list = document.querySelector('main');
let stylesList = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    fontSize: "1.5rem"
}
Object.assign(list.style, stylesList);

//Select the warning at the end of the page by its id warning. Select the id without using a querySelector. Change the size and font of the warning.
const warning = document.getElementById('warning');

warning.style.fontSize = '26px';
warning.style.fontFamily = 'TimesNewRoman';
warning.style.color = 'red';
warning.style.textAlign = 'center';

//Select all even allergy-info items. Give the even items a different background color.
//const allergyInfo = [...document.getElementsByClassName('allergy-info')];
const allergyInfo = document.querySelectorAll('.allergy-info');

allergyInfo.forEach((item, index) => {
    item.style.listStyleType = 'none';
    item.style.textAlign = 'center';
    item.style.width = "30%";
    item.style.margin = "5px auto";
    if (index % 2 === 0) {
        item.style.backgroundColor = 'aqua';
    }
});

//The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.

const footer = document.querySelectorAll('.food-desc');
footer.forEach(item => {
    item.style.display = "flex";
    item.style.flexWrap = "wrap";
    item.style.justifyContent = "center";
    item.style.alignContent = "center";
    item.style.width = "100px";
    item.style.height = "100px";
    item.style.margin = "30px auto";
    item.style.backgroundColor = "lightgreen";
    item.style.border = "2px solid black";
    item.style.borderRadius = "100%";
});