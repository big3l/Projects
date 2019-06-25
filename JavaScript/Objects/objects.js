//to define arrays we use let car=["BMW", "Fiat"]; creates array
//let car = new array(); creates array
//let car = []; creates array

/////////////////////////////////////////////////////////////////////////
/// Objects

let cars = { brand: "BMW", color: "white", year: "2019" };

let person = { fname: "Steven", lname: "Seagull", age: 35, eyes: "green" };

console.log(cars); //prints cars

console.log(person); //prints person

console.log(person["fname"]); //prints person-fname ("Steven")

console.log(cars.brand); //prints cars-brand ("BMW")

cars.brand = "Audi"; //changes cars-brand to "Audi"
//Object { brand: "Audi", color: "white", year: "2019" }

person.age = 40; //changes person-age to 40

person.age = person.age + 1; //increases person-age by +1
person.age += 1; //also increases person-age by +1
//now 42

person.city = "Hamburg"; //added property "city: 'Hamburg'" to person object
//Object { fname: "Steven", lname: "Seagull", age: 42, eyes: "green", city: "Hamburg" }

//person.hair color= "blue";  this will not work because of the space between hair color
person["hair color"] = "blue"; // if spaces needed, put in array - added property "hair color: "blue" to person object
//Object { fname: "Steven", lname: "Seagull", age: 42, eyes: "green", city: "Hamburg", "hair color": "blue" }

person["hair color"] = "Ginger"; //changed person- hair color to  Ginger

console.log(person);
console.log(cars);

/////////////////////////////////////////////////////////////////////////
//create object

let language = new Object(); //same as let languages = { };
language.name = "English"; //added property name: English
language.level = "Native"
language["want to learn"] = "German";
language["new language level"] = "B1";

console.log(language);

/////////////////////////////////////////////////////////////////////////
//Object within an object

let driver = {
    age: 60,
    firstname: "John",
    nationality: "UK",
    beer: { brand: "DEYA", style: "IPA", year: "2019" } //object inside
};
console.log(driver);//Prints: Object { age: 60, firstname: "John", nationality: "UK", beer: {…} }
console.log(driver.beer); //Prints: Object { brand: "DEYA", style: "IPA", year: "2019" }
console.log(driver.beer.style); //Prints: IPA
console.log(driver["beer"].year); //Prints: 2019
console.log(driver["beer"]["brand"]); // Prints: DEYA

//driver.pet="Cat"; // adds pet: cat property to object
driver.pet = ["cat", "dog"]; //adds pet as an array: 0=cat 1=dog

console.log(driver.pet[0]); //Prints 0 in array = cat
console.log(driver.pet[1]); //Prints 1 in array = dog

/////////////////////////////////////////////////////////////////////////
//Creating array of an object

let posts = [
    { title: "cats are nice", author: "Mansour" },
    { title: "Dogs are awesome", author: "Snoopy" }
];
console.log(posts);