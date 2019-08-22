let dropColor = "beige";

function over(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    if (data != ev.target.id) {
        ev.target.appendChild(document.getElementById(data));
    } else {
        console.log('this is the same div');
    }
}

document.addEventListener("dragenter", function (event) {
    if ((event.target.className == "content") || (event.target.classList.contains("box"))) {
        event.target.style.backgroundColor = dropColor;
        event.target.style.border = "2px dashed blue";
    }
})

document.addEventListener("dragleave", function (event) {
    if ((event.target.className == "content") || (event.target.classList.contains("box"))) {
        event.target.style.backgroundColor = "";
        event.target.style.border = "";
    }
})

document.addEventListener("drop", function (event) {
    if ((event.target.className == "content") || (event.target.classList.contains("box"))) {
        event.target.style.backgroundColor = "";
        event.target.style.border = "";
    }
})


// ------------------
// Create more Divs

var stapel = document.getElementById("stapel");
var createDivNumber = 40;
var colors = 6;

let inCount = 0;
for (let index = 0; index < createDivNumber; index++) {
    let nDiv = document.createElement("div");
    let newId = "new" + index;
    setAttributes(nDiv, { "draggable": "true", "id": newId, "ondragstart": "drag(event)" });
    stapel.appendChild(nDiv);
    nDiv.classList.add("box");

    if (inCount < colors) {
        inCount++;
    } else {
        inCount = 1;
    }
    switch (inCount) {
        case 1:
            nDiv.classList.add("yellow");
            break;
        case 2:
            nDiv.classList.add("green");
            break;
        case 3:
            nDiv.classList.add("pink");
            break;
        case 4:
            nDiv.classList.add("blue");
            break;
        case 5:
            nDiv.classList.add("red");
            break;
        case 6:
            nDiv.classList.add("darkblue");
            break;
        default:
        // code block
    }
}

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}