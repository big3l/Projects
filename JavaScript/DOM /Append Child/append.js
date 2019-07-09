//appendChild = node.appendChild(node)

//### Creating a heading (h1) then adding the text inside the h1. ###
// let heading = document.createElement("h1");
// let headingTxt = document.createTextNode("This is the h1 heading inside main div");

// heading.appendChild(headingTxt);
// document.getElementById("main").appendChild(heading);

//////////////////////////////////////////////////////////////
//### creating h1 and text with button ###

function addElement1() {
    let heading1 = document.createElement("h1");
    let headingTxt = document.createTextNode("This is the h1 heading inside main div");
    heading1.appendChild(headingTxt);
    document.getElementById("main1").appendChild(heading1);
}
document.getElementById("btn1").addEventListener("click", function () {
    addElement1();
});

//////////////////////////////////////////////////////////////
//### create h2 and text in green with button ###

function addElement2() {
    let heading2 = document.createElement("h2");
    let headingTxt2 = document.createTextNode("This is the h2 heading inside main div");
    heading2.appendChild(headingTxt2);
    heading2.style.color = "green";
    document.getElementById("main1").appendChild(heading2);
}
document.getElementById("btn2").addEventListener("click", function () {
    addElement2();
});

//////////////////////////////////////////////////////////////
//removing element text with button

let mainDiv = document.getElementById("main1");

document.getElementById("btn3").addEventListener("click", function () {
    mainDiv.removeChild(mainDiv.childNodes[0]);
});

document.querySelector("div").addEventListener("click", function(){
    mainDiv.removeChild(mainDiv.childNodes[0]);
    
});

//////////////////////////////////////////////////////////////
