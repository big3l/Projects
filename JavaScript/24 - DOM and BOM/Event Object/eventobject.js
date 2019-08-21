//////////////////////////////////////////////////////////////////////
//event object (e)
//you can find the parameters within the object.
//various events are available, click, keyup, mousemove etc.
//clientY and clientX will give the position of the click 
//timeStamp gives the time in ms of imput
//offsetX also gives position but counts minus
//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.


let input = document.getElementById("name");

input.addEventListener("click", inputClick);
function inputClick(e) {
    let myEvent = e.clientY;
    console.log(myEvent); //e is object
};

//////////////////////////////////////////////////////////////////////

input.addEventListener("keyup", inputKey);
function inputKey(e) {
    let keyPress = e.timeStamp;
    console.log(keyPress);
    document.getElementById("myDiv").innerHTML = "<h1>" + e.target.value + "</h1>";
};

//////////////////////////////////////////////////////////////////////

input.addEventListener("mousemove", mice);
function mice(e) {
    let mouse = e;
    console.log(mouse.offsetX);
    document.body.style.background = "rgb(" + mouse.offsetX + ", " + mouse.offsetY + ", 250)";
    document.body.style.border = `solid 4px rgb(${mouse.clientY} , ${mouse.clientX}, 50)`;
};

//////////////////////////////////////////////////////////////////////

let form = document.querySelector("form");
form.addEventListener("submit", inputSubmit);
function inputSubmit(e) {
    e.preventDefault(); //preventDefault will stop the form from being submitted
    console.log(e.type);
};

