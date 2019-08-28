

let input = document.getElementById("input");
let btn = document.getElementById("btn");
let div = document.createElement("div");
let main = document.querySelector(".main")


btn.addEventListener("click", square);
function square(e) {
    input.value = div;

}

for (let i = 0; i < 4; i++) {

    main.appendChild(div);
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.className = "box";
}