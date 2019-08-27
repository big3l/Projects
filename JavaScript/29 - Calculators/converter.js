
let fInput = document.getElementById("firstInput");
let sInput = document.getElementById("secondInput");
let unit = document.getElementById("unit");
let labels = document.querySelectorAll("label");

//these have been aded to unitSelect function below.
// fInput.addEventListener("keyup", cmConverter);
// sInput.addEventListener("keyup", inConverter);
// fInput.addEventListener("keyup", kmConverter);
// sInput.addEventListener("keyup", mileConverter);
// fInput.addEventListener("keyup", faConverter);
// sInput.addEventListener("keyup", celConverter);

unit.addEventListener("change", unitSelect);


function cmConverter() {
    let cmResult = fInput.value * 0.393701;
    sInput.value = cmResult
}
function inConverter() {
    let inResult = sInput.value * 2.54;
    fInput.value = inResult
}


function kmConverter() {
    let kmResult = fInput.value * 0.621371;
    sInput.value = kmResult;
}
function mileConverter() {
    let mileResult = sInput.value * 1.60934;
    fInput.value = mileResult;
}

function faConverter() {
    let faResult = (5 / 9) * (fInput.value - 32);
    sInput.value = faResult;
}
function celConverter() {
    let celResult = 32 + (sInput.value * 9 / 5);
    fInput.value = celResult;
}

function clearInputs() {
    fInput.value = "";
    sInput.value = "";
}


function unitSelect() {
    console.log(unit.value)
    switch (unit.value) {
        case "cm-inch":
            clearInputs()
            fInput.addEventListener("keyup", cmConverter);
            sInput.addEventListener("keyup", inConverter);
            fInput.removeEventListener("keyup", kmConverter);
            sInput.removeEventListener("keyup", mileConverter);
            fInput.removeEventListener("keyup", faConverter);
            sInput.removeEventListener("keyup", celConverter);
            labels[1].innerHTML = "Cenitmeters"
            labels[2].innerHTML = "Inches"
            break;
        case "km-mile":
            clearInputs()
            fInput.addEventListener("keyup", kmConverter);
            sInput.addEventListener("keyup", mileConverter);
            fInput.removeEventListener("keyup", cmConverter);
            sInput.removeEventListener("keyup", inConverter);
            fInput.removeEventListener("keyup", faConverter);
            sInput.removeEventListener("keyup", celConverter);
            labels[1].innerHTML = "Kilometers"
            labels[2].innerHTML = "Miles"
            break;
        case "far-cel":
            clearInputs()
            fInput.addEventListener("keyup", faConverter);
            sInput.addEventListener("keyup", celConverter);
            fInput.removeEventListener("keyup", cmConverter);
            sInput.removeEventListener("keyup", inConverter);
            fInput.removeEventListener("keyup", kmConverter);
            sInput.removeEventListener("keyup", mileConverter);
            labels[1].innerHTML = "Fahrenheit"
            labels[2].innerHTML = "Celcius";
            break;

    }
}

///////////////////////////////////////////////////////

// document.getElementById("selector").addEventListener("change", calc);
// function calc(e) {
//     e.preventDefault();
//     let inch = document.getElementById("inchtocms");
//     let mile = document.getElementById("milestok");
//     let feet = document.getElementById("feettom");
//     let input = document.getElementById("input");
//     let result = document.getElementById("result");
//     let selector = document.getElementById("selector");

//     if (selector.value = inch) {
//         input.value = inch / 0.39370;

//     }

// }