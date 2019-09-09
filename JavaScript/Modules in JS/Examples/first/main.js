import Person, { printName, printAge } from './person.js';
let person = new Person("Hi Justin", 35);
console.log(person);
printName(person);
printAge(person);

// import p, {printName as pName, printAge as pAge} from "./person.js";

// let person = new p("Peter", "50");
// console.log(person);

// pName(person);
// pAge (person);

//importing everything from person.js
// import * as p from './person.js';
// let person = new p.default("Jacob", 22);
// console.log(person);

// p.printName(person);
// p.printAge(person);

// without the default export
// let obj = {
//     name: "Mahdiah",
//     age: 20
//     };
//     p.printAge(obj);


