////////////////////////////////////////////////////////////////
//See DOM tree - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-nodes.php
//page order is Document - html - head/body - div/h1/ul - content
//documentElement is html tag


//alert(document.documentElement.getAttribute("lang"));

//document.write("hello world");

//document.body.innerHTML="body"; //body has overwritten the page

//let body = document.querySelector("body");
//body.innerHTML = "Hi";

//document.body gives the same result as above
//document.body.innerHTML = "Hello";

//change body background color
document.body.style.background = "lightblue";

let elementName = document.body.firstElementChild.nodeName; //map to the 1st element
document.write(elementName); //H1

document.body.firstElementChild.innerHTML = "changed inner html of H1";
//the h1 text changed

//trying to change the 2nd element (div)
document.querySelectorAll("body")[0].innerHTML = "change the div content ++ ";

//could work with "insertBefore"

document.write(document.body.childNodes[0].nodeName);
//the first element in the body is #text 

//replace h1 with h2 element using insertBefore
let h1 = document.body.childNodes[0];
let newh2 = document.createElement("h2");

newh2.innerHTML = " The new h2 has replaced h1";
document.body.insertBefore(newh2, h1);

////////////////////////////////////////////////////////////////


















////////////////////////////////////////////////////////////////