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
//Creating objects within array

let posts = [ //array
    { title: "cats are nice", author: "Mansour" }, //[0] in array
    { title: "Dogs are awesome", author: "Snoopy" } //[1] in array
];
//change title from "Dogs are awesome" to "Dogs suck!"
posts[1].title = "Dogs suck!"; // array[1]= 2nd object in array.
console.log(posts[1].title); //Prints: Dogs Suck!

posts[0].comment = "nice post"; //add new property - comment: "nice post"
console.log(posts); //Prints: 0: Object { title: "cats are nice", author: "Mansour", comment: "nice post" }

posts[1].comment = ["nice thanks", "I hate you"]; //add new property "comment" with array containing 2 properties
console.log(posts[1]); //Prints author: "Snoopy" comment: Array [ "nice thanks", "I hate you" ] title: "Dogs suck!"
console.log(posts[1].comment[1]);// prints: I hate you

posts[1].comment[1] = "nice post ;-)"; //changes "I hate you" comment to "nice post ;-)"
console.log(posts[1].comment[1]); //Prints: nice post ;-)

posts[1].comment[1] += "thanks a lot"; // += added "thanks a lot" to "nice post ;-)"


/////////////////////////////////////////////////////////////////////////
// Creating Object including function

let student = {

    firstName: "Daniel",
    lastName: "Lewis",
    id: 3242,
    overThirty: true,
    fullName: function () {
        return "Fullname = " + student.firstName + " " + student.lastName;
    }
};
console.log(student.fullName()); //Prints Daniel Lewis


/////////////////////////////////////////////////////////////////////////
//example : Create a person object. Include the person's first and last name, age, job, city etc. 
//Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France".

let Person = {

    firstName: ["John "],
    lastName: [" Smith", " is a "],
    age: [41, " year old "],
    job: [" engineer ", " living in "],
    country: "france",
    intro: function () {
        return Person.firstName + Person.lastName[0] + Person.lastName[1] + Person.age[0] + Person.age[1] +
            Person.job[0] + Person.job[1] + Person.country + "<br><br>";
    }
};
document.write(Person.intro()); //Prints: John Smith is a 41 year old engineer living in france 

/////////////////////////////////////////////////////////////////////////
//example 2 :create an array of movies objects
//Each movie should have a 'title', 'rating' and 'watched' property
//if you have watched "wanted film " is " 5 stars"
//if you have watched "Mother film " is " 4 stars"

let movies = [
    { Title: "Iron Man", Rating: 5, Watched: true },
    { Title: "Hulk", Rating: 4, Watched: false },
    { Title: "Thor", Rating: 3, Watched: true },
    { Title: "Avengers", Rating: 5, Watched: false }
];


//Using forEach with if/else and function for stars including styling
movies.forEach(function (film) {
    if (film.Watched == true) {
        document.write("<div style= 'color:red;font-weight:bolder'> You watched " + film.Title
            + " and gave it a rating of " + "<span style='color:gold;'>" + stars(film.Rating) 
            + "</span></div><br><br>");
    }
    else {
        document.write("<div style= 'color:blue;'>You have to watch " + film.Title + " it has a rating of "
            + "<span style='color:gold;'>" + stars(film.Rating) + "</span></div><br><br>")
    }
});
function stars(num) {
    let str = "";
    for (let i = 0; i < num; i++) {
        str += "&#9733;";
    }
    return str;
}

//Same as above Using for loop
for (let i = 0; i < movies.length; i++) {
    if (movies[i].Watched == true) {
        document.write("<div style= 'color:grey; font-weight:bold;'>" + "You watched " + movies[i].Title + " and gave a star rating of " 
        + "<span style='color:gold;'>" + stars(movies[i].Rating) + "</div></span><br><br>");
    }
}

//using While loop (without the function)
let i = 0;
while (i < movies.length) {
    document.write("<div style= color:purple;>" + movies[i].Title + "</div>"); 
    i++;
}