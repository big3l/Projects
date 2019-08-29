
let main = document.querySelector(".main");
let btn = document.getElementById("btn");

btn.addEventListener("click", square);
function square(e) {
    let number = input.value;
    e.preventDefault();
    for (let i = 0; i < number; i++) {
        let div = document.createElement("div");
        div.className = "box";
        main.appendChild(div);
        div.style.background = random();

        let xBtn = document.createElement("button");
        xBtn.innerText = "X";
        xBtn.className = "deleteBtn";
        xBtn.addEventListener("click", removeDiv);
        div.appendChild(xBtn);

    }
}

function removeDiv(e) {
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.remove();
    }
}

function random() {
    let allColors = '012ABCDEF3456789';
    let color = "#";
    for (i = 0; i < 6; i++) {
        let x = Math.floor(Math.random() * allColors.length);
        color += allColors[x];
    };
    return color;
}