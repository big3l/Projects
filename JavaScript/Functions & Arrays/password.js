///////////////////////////////////////////////////////////////

let pass = document.querySelector(".password");

function checkLength(input) {
    if (input.value.length >= 8) {
        document.querySelector(".length").style.color = "Green";
        document.querySelector(".length").style.fontWeight = "bold";
    }
    else {
        document.querySelector(".length").style.color = "Red";
    }
};

function checkLower(input) {
    if (input.value.match(/^(?=.*[A-Z]).+$/)) {
        document.querySelector(".lowercase").style.color = "Green";
        document.querySelector(".lowercase").style.fontWeight = "bold";
    }
    else {
        document.querySelector(".lowercase").style.color = "Red";
    }
};

function checkUpper(input) {
    if (input.value.match(/^(?=.*[a-z]).+$/)) {
        document.querySelector(".uppercase").style.color = "Green";
        document.querySelector(".uppercase").style.fontWeight = "bold";
    }
    else {
        document.querySelector(".uppercase").style.color = "Red";
    }
};

function checkSpecial(input) {
    if (input.value.match(/^(?=.*[0-9_\W]).+$/)) {
        document.querySelector(".special").style.color = "Green";
        document.querySelector(".special").style.fontWeight = "bold";
    }
    else {
        document.querySelector(".special").style.color = "Red";
    }
};

pass.addEventListener("keyup", function () {
    checkLength(pass);
    checkLower(pass);
    checkUpper(pass);
    checkSpecial(pass);
});

