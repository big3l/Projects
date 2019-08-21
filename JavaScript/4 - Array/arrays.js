//to define arrays we use let car=["BMW", "Fiat"]; creates array
//let car = new array(); creates array
//let car = []; creates array

///////////////////////////////////////////////////////////////////////////
//Pop and Push in Arrays - add/remove element at end of array.

let colors = ["orange", "pink", "green"];
console.log(colors);

colors.push("blue", "grey", "black"); // Push adds more elements to end of array list
console.log(colors);

colors.pop(); // Pop removes last elements in array list (black)
console.log(colors);

let col = colors.pop();// create variable for Pop
console.log(col); // Writes the item that was popped (green)
console.log(colors);

///////////////////////////////////////////////////////////////////////////
//Shift and unshift - add/remove element at beginning of array
let fruits = ["apple", "mango", "banana"];
console.log(fruits);

fruits.shift(); // deletes the first element from the Array (apple)
console.log(fruits);

fruits.unshift("grapes", "grapefruit", "strawberry"); // adds elements to the start of Array 
console.log(fruits);

fruits.push("blueberry", "pineapple"); // Push adds elements to the end of the array
console.log(fruits);

///////////////////////////////////////////////////////////////////////////

//indexOf - locate element within an array
console.log(fruits.indexOf("pineapple"));
//indexOf shows what number the element is in the array
//if element is not in array then return will be -1 which means False.

///////////////////////////////////////////////////////////////////////////
// Slice
console.log(fruits); // [ "grapes", "grapefruit", "strawberry", "mango", "banana", "blueberry", "pineapple" ]
//element numbers           0            1             2          3         4          5            6
// copy elements banana, blueberry and pineapple to another array using slice

let myFruits = fruits.slice(3, 4); //slice has copied between elements 3 up to but not including 4 (mango)
console.log(myFruits);

myFruits = fruits.slice(3, 5); // slice has copied elements between 3 up to but not including 5 (mango & banana)
console.log(myFruits);

myFruits = fruits.slice(1, 6); //slice has copied elements between 1 up to but not including 6 (grapfruit to blueberry)
console.log(myFruits);

myFruits = fruits.slice(5, 7); // slice has copied elements between 5 up to but not including 7 (blueberry, pinapple)
console.log(myFruits);

//slice() will copy an enture array
let newFruits = fruits.slice(); // creates "newFruits" array and copies elements from "Fruits" array 
console.log(newFruits);

///////////////////////////////////////////////////////////////////////////
//splice() will delete elements from an array
// newFruits=   [ "grapes", "grapefruit", "strawberry", "mango", "banana", "blueberry", "pineapple" ]
//element numbers   0            1             2          3         4          5            6
newFruits.splice(1, 3); //delete elements 1 up to and including 3 (grapefruit, strawberry, mango)
console.log(newFruits);

///////////////////////////////////////////////////////////////////////////
//forEach loop arrays
// 'forEach' - you can request at least 1, up to 3 Parameters in any order
// 1 - the element in the array, 
// 2 - the index of the elements in the array
// 3 - the array list

let cars = ["bmw", "audi", "mercedes", "fiat"];

for (let i = 0; i < cars.length; i++) { //this is a normal "for" loop.
    console.log(cars[0]);
}

cars.forEach(function (carname) { console.log(carname); }) //this is a "forEach" loop

///////////////////////////////////////////////////////////////////////////
//another example for for Each....

let food = ["apple", "kebab", "donner"];

//food.forEach(function(f){ alert(f); } );// this is the same as......

food.forEach(myfood);
function myfood(foodname) {
    console.log(foodname);
}

///////////////////////////////////////////////////////////////////////////

let weekdays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

weekdays.forEach(printWeek);
function printWeek(item, index) {
    console.log(item + " " + index);
}

function printArrDays(item, index, arr) {

    console.log(index);
    console.log(arr[index]);
}

weekdays.forEach(printArrDays);
weekdays.forEach(function (item, index, arr) {
    console.log("the day is " + item);
})

///////////////////////////////////////////////////////////////////////////
// multiplying the numbers in the array X 9.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (item) {
    console.log(item * 9);
})