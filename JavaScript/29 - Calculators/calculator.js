
let plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");

document.addEventListener("keyup", adding);

function adding() {
    let add = parseFloat(plus1.value) + parseFloat(plus2.value);
    let plusRes = document.getElementById("plusRes");
    plusRes.value = add;
    if(plusRes === NaN){
        alert("This is not a number")
    }
};


let minus1 = document.getElementById("minus1");
let minus2 = document.getElementById("minus2");

document.addEventListener("keyup", minus);

function minus() {
    let minus = parseFloat(minus1.value) - parseFloat(minus2.value);
    let minusRes = document.getElementById("minusRes");
    minusRes.value = minus;
};


let multi1 = document.getElementById("multi1");
let multi2 = document.getElementById("multi2");

document.addEventListener("keyup", multi);

function multi() {
    let multi = parseFloat(multi1.value) * parseFloat(multi2.value);
    let multiRes = document.getElementById("multiRes");
    multiRes.value = multi;
};


let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

document.addEventListener("keyup", div);

function div() {
    let div = parseFloat(div1.value) / parseFloat(div2.value);
    let divRes = document.getElementById("divRes");
    divRes.value = div;
};


let mod1 = document.getElementById("mod1");
let mod2 = document.getElementById("mod2");

document.addEventListener("keyup", mod);

function mod() {
    let mod = parseFloat(mod1.value) % parseFloat(mod2.value);
    let modRes = document.getElementById("modRes");
    modRes.value = mod;
};