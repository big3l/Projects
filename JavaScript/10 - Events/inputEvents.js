// function myfunction() {
//     let input = document.querySelector("input");
//     input.style.background = "hotPink";
// }

let input = document.querySelectorAll("input");
function myfunction(num) {

    input[num].style.background = "hotPink";
}

function inputChange() {    //onfocus
    input[1].style.background = "black";
    input[1].style.color = "white";
    input[1].style.border = "20px solid orange";
    input[1].style.borderRadius = "100px";
}

function inputSelect(num) { //onSelect will work when highlighting text
    input[1].style.background = "blue";
    alert("You selected some text");
}

function inputBlur(num) {   //onBlur will work when you click away from the label
    input[0].style.background = "red";
}

function inputKeyDown() {    // keydown works when pressing any key down
    input[0].style.background = "grey";
    // alert("You are pressing down");
    // console.log("you pressed a key down");
}

function inputKeyUp() {    //keyup works when lifting any key
    input[0].style.background = "brown";
    input[0].style.color = "white";
    console.log("The onkeyup event: " + input[0].value);
}

function inputKeyPress() {   // keydown works when pressing the next key down
    input[1].style.fontSize = "30px";
    console.log("The onkeypress event:" + input[1].value);
}
function formSubmit(){
    alert("you will be redirected to W3 schools")
}