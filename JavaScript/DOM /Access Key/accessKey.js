///////////////////////////////////////////////////////////////
//AccessKey - Creates shortcut

// IE, Chrome, Safari, Opera 15+: [ALT] + accesskey
// Opera prior version 15: [SHIFT] [ESC] + accesskey
// Firefox: [ALT] [SHIFT] + accesskey

///////////////////////////////////////////////////////////////

document.getElementById("link").accessKey = "G";

let akey = document.getElementById("link").accessKey;
console.log(akey); //prints G

///////////////////////////////////////////////////////////////

let hide = document.querySelectorAll("button")[0];
let show = document.querySelectorAll("button")[1];
let showHide = document.querySelectorAll("button")[2]
let img = document.querySelector("img"); // new variable for arrow example below

hide.addEventListener("click", function () {
    document.querySelector("img").style.display = "none";
});

//above but with => Arrow (created new variable called "img" above)

hide.addEventListener("click", () => img.style.display = "none");

show.addEventListener("click", () => img.style.display = "block");

showHide.addEventListener("click", () => {
    if (img.style.display == "none") {
        img.style.display = "block"
    }
    else { img.style.display = "none" }
});

///////////////////////////////////////////////////////////////
//Create button which changes background color

//Random color generator made previously
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let btn = document.getElementById("mybtn");

btn.addEventListener("click", () => {
    document.querySelector("body").style.background = getRandomColor();
});

///////////////////////////////////////////////////////////////
//Resize the window

window.addEventListener("resize", function () {
    document.querySelector("body").style.background = getRandomColor();
});


window.addEventListener("resize", function () {
    let w = window.innerWidth;
    let h = window.innerHeight;

    document.getElementById("size").innerHTML =
        "Width = " + w + "px <br>" + "Height = " + h + "px";
});
