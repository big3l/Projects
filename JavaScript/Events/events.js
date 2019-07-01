////////////////////////////////////////////////////////////////

// function sayHi() {
//     let name = prompt("Hello what is your name?");
//     alert(" Hi " + name);
//     console.log(" Hi " + name);
// }

// let body = document.getElementsByTagName("body")[0]; // you have to select the element number with index
// function changeBg() {
//     //these 3 attributes do the same thing
//     //let body = document.querySelector("body"); //selector gets the 1st element
//     //let body = document.querySelectorAll("body")[0]; // you have to select the element number with indexr
//     body.style.backgroundColor = ("hotPink");
// }

// function chBg(color) {
//     body.style.backgroundColor = color;
// }

////////////////////////////////////////////////////////////////
//logo 1 in html

let counter = 1;
function changeImg1() {
    let img = document.getElementById("logoImg1");
    counter++;
    let random = Math.floor(Math.random() * 1000) + 1; //-somthing we will try later with math
    let newSrc = "http://picsum.photos/id/" + counter + "/400/400";
    img.setAttribute("src", newSrc);
}

////////////////////////////////////////////////////////////////
//logo 2 in html

function changeImg2() {
    let img = document.getElementById("logoImg2");
    let firstimg = "https://picsum.photos/id/456/400/400";
    let secondimg = "https://picsum.photos/id/678/400/400";
    if (img.getAttribute("src") == firstimg) {
        img.setAttribute("src", secondimg);
    }
    else {
        img.setAttribute("src", firstimg);
    }
}

function startAuto(){
    setInterval(changeImg1,1000);

}
////////////////////////////////////////////////////////////////
//logo 3 in html

// let colors = ["red", "orange", "blue", "green", "yellow", "pink", "purple", "hotpink", "grey", "black", "white"];
// let body = document.querySelector("body");
// let buttonText = document.getElementById("butCol");
// let counter = 0;

// function BgChange() {

//     if (counter == colors.length) { //starts from the 1st element again
//         counter = 0;
//     }
//     if (counter < colors.length) {
//         body.style.background = colors[counter]; //changes background color
//         buttonText.innerText = colors[counter]; //changes button text to match color name
//         counter++;
//     }
// }

////////////////////////////////////////////////////////////////

function showValue(){
    let input = document.getElementById("name");
    alert("You changed something: " + input.value);
}

let p= document.getElementById("para");
function over(){
    p.textContent= "Stop hovering over the text :-o !!!"
    p.style.color = "red";
    p.style.fontWeight = "bold";
}
function out(){
    p.textContent= "Thanks for not hovering over me ;-)";
    p.style.color = "green";
    p.style.fontWeight = "bold";
}