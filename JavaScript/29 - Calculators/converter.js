
let fInput = document.getElementById("firstInput");
let sInput = document.getElementById("secondInput");
let unit = document.getElementById("unit");
let labels = document.querySelectorAll("label");

fInput.addEventListener("keyup", kmConverter);
sInput.addEventListener("keyup", mileConverter);
unit.addEventListener("change", unitSelect);


function kmConverter() {
    let kmResult = fInput.value * 0.621371;
    sInput.value = kmResult;
}
function mileConverter() {
    let mileResult = sInput.value * 1.60934;
    fInput.value = mileResult;
}


function cmConverter() {
    let cmResult = fInput.value * 0.393701;
    sInput.value = cmResult
}
function inConverter() {
    let inResult = sInput.value * 2.54;
    fInput.value = inResult
}


function faConverter(valNum){
    valNum = parseFloat(valNum);
    let faResult = fInput.value * 17.222;
    sInput.value = faResult; 
}
function celConverter(){
    let celResult = sInput.value * 33.8;
    fInput.value = celResult;
}


function unitSelect() {
    console.log(unit.value)
    switch (unit.value) {
        case "cm-inch":
            fInput.addEventListener("keyup", cmConverter);
            sInput.addEventListener("keyup", inConverter);
            labels[1].innerHTML = "Cenitmeters"
            labels[2].innerHTML = "Inches"
            break;
        case "km-mile":
            fInput.addEventListener("keyup", kmConverter);
            sInput.addEventListener("keyup", mileConverter);
            labels[1].innerHTML = "Kilometers"
            labels[2].innerHTML = "Miles"
            break;
        case "far-cel":
            fInput.addEventListener("keyup", faConverter);
            sInput.addEventListener("keyup", celConverter);
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