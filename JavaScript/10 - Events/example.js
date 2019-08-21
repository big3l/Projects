
let mydiv = document.getElementById("divToStyle");
mydiv.style.border = "5px solid black";
mydiv.style.width = "75%";
mydiv.style.marginLeft = "150px";

let btn = document.querySelectorAll("button");
function bold() {
    mydiv.style.fontWeight = "bold";
    mydiv.style.border = "5px solid black";
}
btn[0].addEventListener("click", bold);
btn[0].addEventListener("mouseover", function(){
    btn[0].style.fontWeight = "bold";
})
btn[0].addEventListener("mouseout", function(){
    btn[0].style.fontWeight = "normal";
})

function ital() {
    mydiv.style.fontStyle = "italic";
    mydiv.style.border = "2px solid hotPink";
}
btn[1].addEventListener("click", ital);

function Tahoma() {
    mydiv.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    mydiv.style.border = "5px solid blue";
}
btn[2].addEventListener("click", Tahoma);

function Arial() {
    mydiv.style.fontFamily = "Arial";
    mydiv.style.border = "5px solid grey";
}
btn[3].addEventListener("click", Arial);

//another way of doing it....
btn[4].addEventListener("click", function () {
    mydiv.style.color = "red"; mydiv.style.border = "5px solid red";
});

btn[5].addEventListener("click", function () {
    mydiv.style.color = "green"; mydiv.style.border = "5px solid green";
});

btn[6].addEventListener("click", function () {
    mydiv.style.color = "black"; mydiv.style.border = "5px solid black";
});

btn[7].addEventListener("click", function () {
    mydiv.style.fontSize = "small"; mydiv.style.border = "2px solid lightGreen";
});

btn[8].addEventListener("click", function () {
    mydiv.style.fontSize = "1em"; mydiv.style.border = "5px solid brown";
});

btn[9].addEventListener("click", function () {
    mydiv.style.fontSize = "large"; mydiv.style.border = "8px solid gold";
});
