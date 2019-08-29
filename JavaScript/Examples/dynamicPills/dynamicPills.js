
let li = document.querySelectorAll("li");
let section = document.querySelectorAll("section")

let selected = document.getElementsByClassName("selected");
let active = document.getElementsByClassName("active");

function removeClass() {
    for (let x = 0; x < li.length; x++) {
        section[x].className = "";
        li[x].className = "";
    }
}

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        removeClass();
        section[i].className = "active";
        li[i].className = "selected";
    });
}


li.forEach()


//selected = active
//change class to active and selected onclick
//onclick h3, img and p change