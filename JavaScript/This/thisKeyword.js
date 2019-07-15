////////////////////////////////////////////////////////////

let btn = document.getElementById("myBtn");
btn.style.left = "10px";
btn.style.top = "0px";
btn.style.position = "relative";

btn.addEventListener("click", function () {
    this.style.left = parseInt(this.style.left) + 20 + "px";
    this.style.top = parseInt(this.style.top) + 20 + "px";
    console.log(parseInt(this.style.left))
});

////////////////////////////////////////////////////////////

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

let bBtn = document.getElementById("bBtn");
let img2 = document.getElementById("myImg2");
img2.style.left = "10px";
img2.style.position = "relative";

function moveRight() {
    img2.style.left = parseInt(img2.style.left) + 10 + "px";
}
bBtn.addEventListener("click", function () {
    setInterval(moveRight, 30);
});

////////////////////////////////////////////////////////////
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