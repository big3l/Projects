///////////////////////////////////////////////////////////////

let colors = ["red", "blue", "green"];
//no. in array  0       1       2
let colors1 = ["orange", "lightblue", "pink"];
//no. in array     0           1         2

///////////////////////////////////////////////////////////////
//concat - this combines both arrays into 1

let allColors = colors.concat(colors1);

console.log(allColors);
// prints: Array(6) [ "red", "blue", "green", "orange", "lightblue", "pink" ]
//no. in array          0       1       2         3            4        5

///////////////////////////////////////////////////////////////
//slice - selects elements in an array

console.log(allColors.slice(1, 3));
//prints: Array [ "blue", "green" ]

console.log(allColors.slice(1, 5));
//prints: Array(4) [ "blue", "green", "orange", "lightblue" ]

console.log(allColors.slice(0, 4));
//prints: Array(4) [ "red", "blue", "green", "orange" ]

///////////////////////////////////////////////////////////////
//splice adds and removes elements
//splice = array.splice(index, howmany, item1, ....., itemX)

let cars = ["bmw", "ford", "fiat"];
console.log(cars);

//add items to array
cars.splice(0, 0, "merc", "audi"); //from index 0 (bmw), deletes 0 (bmw), add merc & audi
console.log(cars);
//"cars" is now: Array(5) [ "mercedes", "audi", "bmw", "ford", "fiat" ]

cars.splice(0, 2, "skoda", "lada"); //from index 0 (merc), delete 2 (merc & audi), add skoda & lada
console.log(cars);
//"cars" is now: Array(5) [ "skoda", "lada", "bmw", "ford", "fiat" ]

cars.splice(1, 1, "merc", "audi"); // from index 1 (lada), delete 1 (lada), add merc & audi
console.log(cars);
//"cars" is now: Array(6) [ "skoda", "merc", "audi", "bmw", "ford", "fiat" ]

cars.splice(1, 0, "lada", "vw"); // from index 1 (merc), delete 0 (nothing), add lada & vw
console.log(cars);
//"cars" is now: Array(8) [ "skoda", "lada", "vw", "merc", "audi", "bmw", "ford", "fiat" ]

//delete items from array
cars.splice(0, 5); // from index 0 (skoda), delete 5 items
console.log(cars);
//"cars" is now: Array(3) [ "bmw", "ford", "fiat" ]

///////////////////////////////////////////////////////////////
//Find method - Get the value of the first element in the array
//array.find(function(currentValue, index, arr),thisValue)

let food = ["banana", "apple", "mango"];

function check(foodName) {
    return foodName == "apple"; // this will check if "apple" is in the array
}
console.log("we are searching for apple : " + food.find(check) + " is found");

///////////////////////////////////////////////////////////////
//finding objects inside array
//findIndex() - this will give the index number
// array.findIndex(function(currentValue, index, arr), thisValue)

let person = [{ name: "Anna", work: "Doctor" },
{ name: "David", work: "Web Developer" },
{ name: "Eric", work: "Hair Dresser" },
{ name: "John", work: "Web Developer" },
{ name: "Steve", work: "Hunter" }];

function isWebDev(employee) {
    return employee.work == "Web Developer"; //will search for work: web developer
}
console.log("The Web Developer is " + person.find(isWebDev).name); // found the 1st Web Developer.name = David

console.log("The index of the Web Developer is " + person.findIndex(isWebDev));
// returns the index of the first web developer (David is 1)

console.log("The index of the Web Developer in reverse is " + person.reverse().findIndex(isWebDev));
//returns the index of the 1st web developer in reverse (John is 2)

///////////////////////////////////////////////////////////////
//filter creates an array with all elements that pass the test (function in this example)
//array.filter(function(currentValue, index, arr), thisValue)

console.log(person.filter(isWebDev)); // will filter all Web Developers (John and David)

//new filter example....

let age = [15, 18, 30, 55, 60, 13, 22, 75, 70];
console.log(age.sort());
//sort puts the value of the array in ascending order (not great for numbers over 100)

function canDrive(driverAge) {
    return (driverAge >= 18 && driverAge <= 70); //return ages over 18 and below 70
}

let drivers = age.filter(canDrive);
console.log(drivers.sort()); //returns: Array(6) [ 18, 22, 30, 55, 60, 70 ]

///////////////////////////////////////////////////////////////
//Reduce reduces the array to a single value.
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

let cities = [
    {
        city: "Hamburg",
        population: 1000000
    },
    {
        city: "Berlin",
        population: 2000000
    },
    {
        city: "Stuttgart",
        population: 700000
    }
];

function sumOfPopulation(total, city) {
    return total + city.population
}
let allPopulation = cities.reduce(sumOfPopulation, 0);
console.log("Total population is: " + allPopulation);

///////////////////////////////////////////////////////////////
//more reduce

let numbers = [8, 2, 10, 20];

function sumNumbers(total, num) {
    return total + num;
}
let newArray = numbers.reduce(sumNumbers); //the sum is 40
console.log(newArray);

newArray = numbers.reduce(sumNumbers, 10);//the sum is 40 + 10 = 50 
console.log(newArray);

///////////////////////////////////////////////////////////////
//counting duplicate objects in arrays

let names = ["Alice", "Bob", "John", "Alice", "Carl", "Bob"];

function countNames(allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}
let resultNames = names.reduce(countNames, {});
console.log(resultNames);
// prints: Object { Alice: 2, Bob: 2, John: 1, Carl: 1 }

///////////////////////////////////////////////////////////////
//map function in arrays
//creates a new array with the results of calling a function for every array element.
//calls the provided function once for each element in an array, in order.
//array.map(function(currentValue, index, arr), thisValue)

let arr = [2, 4, 8, 10];

// function multi (number){
//     return number * 2; //multiplies each number in array by x2
// }
// let newArr = arr.map(multi);
// console.log(newArr); //Array(4) [ 4, 8, 16, 20 ]

///////////////////////////////////////////////////////////////
//other ways to write the above using arrow functions =>

let multi = function (number) { return number * 2; }
multi = (number) => { return number * 2; }
multi = number => { return number * 2; }
multi = number => number * 2;

let callMe = () => { console.log("Hello"); } //Without arguments

newArr = arr.map(multi);
newArr = arr.map(number => number * 2); //the shortest way

console.log("Using arrow function : " + newArr);

///////////////////////////////////////////////////////////////
// By using arrow functions, we avoid having to type the function keyword,
// return keyword (it’s implicit in arrow functions), and curly brackets.
// With Arrow => we can reduce the amount of code we need to write. 

let materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

function matLength(material) {
    return material.length;
}
console.log(materials.map(matLength)); //gives the length of the words in materials

//or you can write the function shorter with arrow =>

console.log(materials.map(material => material.length)); //same as the function above just sorter

///////////////////////////////////////////////////////////////