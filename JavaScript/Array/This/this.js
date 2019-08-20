////////////////////////////////////////////////////////////
//"this" refers to the object it belongs to

console.log(this);
//returns: Window http://127.0.0.1:5500/JavaScript/This/this.html

let person = { //person is the object, firstName and lastName are inside the object
    firstname: "Daniel",
    lastName: "Lewis",

    fullName: function () {
        console.log(this); //prints: Object { firstname: "Daniel", lastName: "Lewis", fullName: fullName() }        
        console.log("This is the fullname: " + this.firstname + " " + this.lastName);
        this.age = 35; //this will add "age" to the person property
    }
}
console.log(person);
//prints: Object { fisrtname: "Daniel", lastName: "Lewis" }

console.log(person.lastName);
//prints: Lewis

console.log(person.fullName());
//prints: This is the fullname: Daniel Lewis

////////////////////////////////////////////////////////////

let car = {
    name: "BMW",
    topSpeed: 250,
    color: "Green",
    model: "M3"
}
car.year = 2019; //added "year" to object called car

console.log(car); // prints Object { name: "BMW", topSpeed: 250, color: "green", year: 2019 }

car.info = function () {
    // this.model = "M3";
    console.log(this.name + " " + this.color + " " + this.model);
    return this.name + " " + this.color + " " + this.model;
}
console.log(car.info());

let merc = {
    name: "Mercedes",
    color: "Black",
    model: "C63 AMG",
};
console.log(car.info.call(merc));
//we use the "info" function from the "car" object in the "merc" object

////////////////////////////////////////////////////////////

let btn = document.getElementById("myBtn");
let body = document.getElementsByTagName ("body")[0];

btn.addEventListener("click", function () {
    this.style.background = "red"; //this means button
    this.style.color = "white";
    this.style.fontSize = "1.9em";
    body.style.background = "orange";
    this.parentElement.remove(); //this will delete the parent element (div)
});