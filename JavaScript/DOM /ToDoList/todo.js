/////////////////////////////////////
//TO DO LIST
//Adding items to the to do list

let mainDiv = document.getElementById("mainDiv");
let input = document.getElementById("textInput");

function newList() {
    if (input.value !== "") {
        let newItem = document.createElement("h3");
        let newItemName = document.createTextNode(input.value);

        newItem.appendChild(newItemName);
        document.getElementById("mainDiv").appendChild(newItem);
        input.value = "";
        input.focus();

        //Remove items from list
        let el = document.getElementsByTagName("h3");
        for (let i = 0; i < el.length; i++) {
            el[i].onclick = function () {
                mainDiv.removeChild(this);
            }
        }
    }
    else {
        alert("Enter an item to the to do list");
    }
}
function pressEnter(myEvent) {
    if (myEvent.keyCode == 13) {
        newList();
    }
}
button.addEventListener("click", newList);
input.addEventListener("keypress", pressEnter);


//Another attempt at removing in
// let newItem = document.createElement("h3");

// newItem.addEventListener("click", function () {
//     newItem.removechild(newItem.childNodes[0])
// });


//Other Attempts
// document.getElementById("mainDiv").addEventListener("click", function () {
//     mainDiv.removeChild(mainDiv.childNodes[0]);
// });


//Ahmads way...
// document.getElementById('add').addEventListener('click', function () {
//     let div = document.createElement('div');
//     let text = document.createTextNode(input.value);

//     div.appendChild(text);
//     document.getElementById('DivOutput').appendChild(div);

//     div.addEventListener('click', function () {
//         div.removeChild(div.childNodes[0]);
//     });

// });