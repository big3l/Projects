/////////////////////////////////////////////////////////////////////
//https://www.tutorialrepublic.com/javascript-tutorial/javascript-window-location.php

function loadWebsite() {
    // window.location.assign("https://www.github.com");
    // window.location.replace("https://www.google.com");
    window.location.href = "https://www.bing.com";
};

let myBtn = document.getElementById("location");
myBtn.addEventListener("clicḱ",loadWebsite);


/////////////////////////////////////////////////////////////////////

let btn = document.createElement("button");
btn.innerHTML = "learn javascript";

btn.addEventListener("click", function(){
    window.location.href = "https://www.tutorialrepublic.com/javascript-tutorial/javascript-window-location.php";
});
document.body.appendChild(btn);

//will redirect to new website from "loadWebsite" function
//document.body.addEventListener("load", setTimeout(loadWebsite, 2000));

/////////////////////////////////////////////////////////////////////

let back = document.getElementById("back");
let frwd = document.getElementById("forwards")

back.onclick = function(){
    window.history.back();
};

frwd.onclick = function(){
    window.history.forward();
};



/////////////////////////////////////////////////////////////////////
