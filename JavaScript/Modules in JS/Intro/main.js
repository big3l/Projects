import { greeting, hi, makeElement } from "./user.js";
import doubleNumber from "./user.js";
console.log(greeting);
console.log(hi("Steven"));
console.log(doubleNumber(20));


let div = document.createElement("div");
div.append(hi("James"));
div.style.background = "orange";
document.body.append(div);

//this is the same as above using makeElement function created in user.js
makeElement("div", hi("Daniel"), "blue");
makeElement("h1", hi("Mike"), "red");
makeElement("ul", hi("Person"), "green");