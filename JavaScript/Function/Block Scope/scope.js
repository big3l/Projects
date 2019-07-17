//////////////////////////////////////////////////////////
//ES6 is the new version of Javascript, updated version have different,
//newer version of code. Including "let", "var", "const", "arrow function =>"

function start() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); //this wont work outside the 4 loop (not defined)
}
start(); //prints the numbers 0 - 4 in the console

//replacing let with var will remove the error but this is a bad idea,
//some other browsers may not support it.

//////////////////////////////////////////////////////////
//this will only work with var
function start2() {
    for (let i = 0; i < 5; i++) {
        if (true) {
            var color = "blue";
        }
    }
    console.log(color);
}
start2();

//////////////////////////////////////////////////////////
//different between let and var
//const will fix the value ("lightblue") when "usercolor" tries to change it

var myColor = "red";
console.log(window.myColor); //red because using var
var age = 20;
console.log(window.age); //undefined because using let

const userColor = "lightblue"; //const will fix
// userColor = "red"; //attemping to change the color gives error
console.log(userColor);

// for (const i = 0; i < 5; i++) { //const doesnt work in a for loop
//     console.log(color);
// }

const name = "Dan";
// name = "Dave"; gives error because const wont let me change it to Dave
console.log(name);

//////////////////////////////////////////////////////////
//You can change the value using const by creating an object

const car = {
    name: "Mercedes", color: "black", model: "AMG", year: 2019,
    
    carInfo: function () {
        console.log("Color= " + this.color + " name = " + this.name);
    },
    color:"blue" //change the color to blue
    
}
console.log(car.carInfo());

console.log(car); 
car.name = "Audi";
console.log(car.name);
// console.log(car.carInfo()); undefined as car is const and this is outside the object


//////////////////////////////////////////////////////////
//const Array

const drink = ["water", "coffee", "milk", "tea"];

console.log(drink);

drink[0] = "Lemon Juice"; //can change/add items using items in the Array
console.log(drink);

//error cannot change all at once with const - will work with let
drink[0] = ["green tea", "beer", "late"]; 
console.log(drink);