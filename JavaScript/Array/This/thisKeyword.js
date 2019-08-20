////////////////////////////////////////////////////////////
//parseInt with "this" to style positions of the button

//styling the button
let btn = document.getElementById("myBtn");
btn.style.left = "50px";
btn.style.top = "0px";
btn.style.background = "green";
btn.style.color = "white";
btn.style.position = "relative";

btn.addEventListener("click", function () {
    this.style.left = parseInt(this.style.left) + 20 + "px";
    this.style.top = parseInt(this.style.top) + 20 + "px";
    console.log(parseInt(this.style.left))
});

////////////////////////////////////////////////////////////
//As above but with transition 

let img = document.getElementById("myImg");
let aBtn = document.getElementById("aBtn");
img.style.left = "10px";
img.style.position = "relative";
img.style.transition = "2s";

aBtn.addEventListener("click", function () {
    img.style.left = parseInt(img.style.left) + 1000 + "px";
    img.style.transition = (img.style.transition) + 2 + "s";
});

////////////////////////////////////////////////////////////
//image 2 will move 10px every 0.5ms 

let bBtn = document.getElementById("bBtn");
let img2 = document.getElementById("myImg2");
img2.style.left = "10px";
img2.style.position = "relative";

function moveRight() {
    img2.style.left = parseInt(img2.style.left) + 10 + "px";
}
bBtn.addEventListener("click", function () {
    setInterval(moveRight, 50);
});

////////////////////////////////////////////////////////////
//animating the image using @webkit equivalent
let cBtn = document.getElementById("cBtn");

function anim() {
    document.getElementById("img3").animate([
        { transform: "translateX(0px)" },
        { transform: "translateX(400px)" },
        { transform: "translateY(-400px)" },
        { transform: "translateX(400px)" },
        { transform: "translateY(-400px)" },
        { transform: "translateX(0px)" }
    ], { duration: 2000, iterations: Infinity }
    );
};

cBtn.addEventListener("click", function () {
    anim();
})