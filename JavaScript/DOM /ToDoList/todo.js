/////////////////////////////////////
//TO DO LIST

function newList() {
    let newItem = document.createElement("h3");
    let input = document.getElementById("textInput");
    let newItemName = document.createTextNode(input.value);

    newItem.appendChild(newItemName);
    document.getElementById("mainDiv").appendChild(newItem);
    input.value = "";
}
document.getElementById("button").addEventListener("click", function () {
    newList();
});

let newItem = document.createElement("h3");
newItem.addEventListener("click", function () {
    
    newItem.removechild(newItem.childNodes[0])
});

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