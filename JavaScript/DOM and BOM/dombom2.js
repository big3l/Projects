////////////////////////////////////////////////////////////////

//https://www.tutorialrepublic.com/codelab.php?topic=javascript&file=select-elements-by-class-name

let matches = document.getElementsByClassName("test");

for (let i = 0; i < matches.length; i++) {
    matches[i].style.background = "Orange";
};

for (let el in matches) {
    // matches[el].style.color = "white";
};

////////////////////////////////////////////////////////////////
//add new paragraph before the last one
//appendChild will insert after the last one

let oldP = matches[matches.length - 1]; //selected the last element
let newP = document.createElement("p");

newP.innerHTML = "New Red Paragraph";
newP.style.padding = "10px";
newP.style.background = "red";

document.body.insertBefore(newP, oldP);

////////////////////////////////////////////////////////////////

let para = document.getElementsByTagName("p");
console.log(para.length); //6 including the one just added above

//style all of the "p" elements
for ( let i= 0 ; i < para.length; i++){
    para[i].style.fontWeight = "bold";
    para[i].style.border = "3px solid green"
};

//getPropertyValue - https://www.tutorialrepublic.com/codelab.php?topic=javascript&file=get-computed-style-information-from-an-element

 