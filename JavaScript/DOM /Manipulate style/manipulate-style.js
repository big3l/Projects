///////////////////////////////////////////////////
//Manipulating styles
//set classes with style in html
//can link classes from a CSS file

let htag = document.getElementsByTagName("h1");
// htag[1].style.color = "blue";
htag[0].style.color = "lightgreen";
htag[0].style.border = "10px solid green";
htag[1].classList.add("light"); //"light" is the class set in the header .html
htag[1].classList.remove("light"); // remove light class from <h1>

let para = document.getElementsByTagName("p");
para[0].classList.add("light"); // add light class to <p>
para[0].classList.add("bg");//add new "bg" class to <p>

///////////////////////////////////////////////////////////////
//created a button and added both classes previously set
let button = document.createElement("button");
button.innerHTML = "click me";
let body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.classList.add("bg", "light");

///////////////////////////////////////////////////////////////
//getting the text document with querySelector
//querySelector will only effect the 1st element, the 1st <p> in this example
//querySelectorAll will effect all elements

let p = document.querySelector("p");
console.log(p.textContent); //Prints: learning javascript is amazing manipulate-style.js:30:9
p.textContent = "i love javascript";
//changes the 1st <P> to i love javascript. <strong> tag doesnt work with text.Content
p.innerHTML = "I love <strong> Javascript </strong>";
// strong element makes the word javascript bold

//inserted <h2> element within <p> element
p.innerHTML = "<h2> Javascript </h2> i love <strong> Javascript </strong>";

para[0].classList.remove("bg"); //remove style class bg from 1st <p> element
para[1].classList.add("light"); // add style class light to 2nd <p> element

//queryselectorAll you can select as many elements you need, this one we changed elements with class "light"
let pClass = document.querySelectorAll(".light"); 
pClass[0].style.color = "red"; //change the text color of 1st <p> element to red
pClass[1].style.color = "red"; //change the text color of 2nd <p> element to red


//using for loop to change all <p> elements to color red.
let allPRed = document.querySelectorAll("p"); //define all "p"'s as allPRed
for (let i = 0; i < allPRed.length; i++) {
    allPRed[i].style.color = "red";
}