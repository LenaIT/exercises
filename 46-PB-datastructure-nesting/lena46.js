'use strict';
//1. Given the 2D Array below, loop through the arrays to print the values.
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        console.log(board[i][j]);
    }
}

//2. Doggo
//2.1 Create a doggo object. Add name and breed as properties of the object.
const doggo = {
    name: "Pluto",
    breed: "Husky",
}

//2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
console.log("\n Task 2:");
//doggo.favoriteFood = [];
doggo.favoriteFood = ["meat", "bones", "bacon"];

/* doggo.favoriteFood[0] = "meat";
doggo.favoriteFood[1] = "bones";
doggo.favoriteFood[2] = "bacon"; */

console.log(doggo);
console.log(doggo.favoriteFood);

//2.3 Access the second element of the doggo's favorite foods.
console.log(doggo.favoriteFood[1]); //bones

//2.4 Add a method that loops through and print all the doggo's favorite food.
doggo.myMethod = function () {
    doggo.favoriteFood.forEach(element => console.log(element));
};

console.log(doggo);
doggo.myMethod();

/* 3.
3.1 Create an object called recipes.
3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
3.3 Without changing the previous code, add another ingredient - let's add ginger.
3.4 Change the ingredient sugar to brown sugar.
3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. */

const recipes = {
    'ingredients': {
        first: "butter",
        second: "sugar",
        third: "flavour"
    }
};

console.log("\nTask3:");
recipes.ingredients.four = "ginger";
console.log(recipes);
recipes.ingredients.second = "brown sugar";
console.log(recipes.ingredients);
recipes.myMethod = function () {
    for (const property in recipes.ingredients) {
        console.log(`${property}: ${recipes.ingredients[property]}`);
    }
};
console.log(recipes);
recipes.myMethod();