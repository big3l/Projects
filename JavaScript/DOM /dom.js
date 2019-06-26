///////////////////////////////////////////////////////
//DOM -Document Object Model

let h1 = document.querySelector("h1");
let body = document.querySelector("body");
let a = document.querySelector("a");

h1.style.color = "green";
h1.style.margin = "10%";

body.style.background = "lightgreen"

a.style.color = "orange";
a.style.background = "white";
a.style.fontSize = "35px";

////////////////////////////////////////////////////////////////////////
// change background color using function

let isBlue = false;

function changeColor() {
    if (isBlue == true) {
        h1.style.fontSize = "35px";
    }
    else {
        h1.style.fontSize = "75px";
    }
    isBlue = !isBlue;
}

setInterval(changeColor, 1000); //color changes every 1000ms from blue to white