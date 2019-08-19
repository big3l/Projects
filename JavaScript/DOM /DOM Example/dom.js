// //////////////////////////////////////////////////////////////////

// console.log(document.URL); //prints the page address
//http://127.0.0.1:5500/JavaScript/DOM%20/dom.html

console.log(document.title); //prints title of html file
//DOM Example

document.title = "Welcome"; //change the title to Welcome
console.log(document.title);

console.log(document.doctype); //doctype is html
console.log(document.head);
console.log(document.body);

console.log(document.all); //lists all tags in html
console.log(document.all[10]) //selected the 10th tag (header)

console.log(document.all[10].textContent = "Changed the header to Hello")
//changed the the text content in the header.

console.log(document.forms[0]); // shows all the forms

console.log(document.links); //shows all links
document.links[0].href = "https://www.youtube.com/"; //added link

console.log(document.images); //shows all images
document.images[0].src = "https://picsum.photos/id/277/200/300"; //added an image

//////////////////////////////////////////////////////////////////
//getElementsByClassName 

let items = document.getElementsByClassName("list-group-item");
console.log(items); //creates array of all items with "list-group-item" as class name

for (let i = 0; i < items.length; i++) {
    items[i].style.color = "orange";
    //changed element with class name "list-group-item" to orange
};
items[2].style.fontSize = "2em"
items[1].style.background = "lightgreen"
//difference between innerHTML and textContent
items[0].innerHTML = "<h3>change the content of the 1st item and added h3</h3>"
items[3].textContent = "<h3>changed the content of the last item </h3>";

//////////////////////////////////////////////////////////////////
//selecting with querySelector

let header = document.querySelector("#main-header");
header.style.borderBottom = "5px dashed red";
console.log(header);

let input = document.querySelectorAll("input")[1];
input.placeholder = "added a placeholder text"

let btn = document.querySelector('input[type="submit"]');
btn.style.background = "purple";

let item = document.querySelector(".list-group-item");
item.style.color = "blue";

// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "red";

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// console.log(secondItem);
// secondItem.style.color = "yellow";

//////////////////////////////////////////////////////////////////
//selecting with querySelectorAll

let titles = document.querySelectorAll(".title");
titles[1].textContent = "changed the title"

let odd = document.querySelectorAll("li:nth-child(odd)");
console.log(odd);

let even = document.querySelectorAll("li:nth-child(even)");
for (let i = 0; i < odd.length; i++) {
    odd[i].style.background = "Red";
    even[i].style.background = "green";
};

//parent of #items (ul) is the main div
let itemList = document.querySelector("#items");
console.log(itemList.parentNode);
itemList.parentNode.style.background = "lightgreen";

//go from "itemList" back to body
console.log(itemList.parentNode.parentNode.parentNode); //prints body

console.log(itemList.parentElement.parentElement); //prints div

console.log(itemList.childNodes);
//childNodes print everything including spaces, children will take just the elements

console.log(itemList.children);
//use children instead of childNodes

console.log(itemList.children.length); //8 items in itemList = #items

//styling each of the 8 items
for (let i = 0; i < itemList.children.length; i++) {
    itemList.children[i].style.borderTop = "5px dashed grey";
};

//////////////////////////////////////////////////////////////////
//firstElementChild

//change only the first elementChild which is the first <li>
itemList.firstElementChild.style.background = "orange";

//lastElementChild
// change only the last elementChild which is the last is href
itemList.lastElementChild.style.borderBottom = "5px dashed orange";

//nextSibling
console.log(itemList.nextSibling); //prints text

//nextElementSibling
console.log(itemList.children[2].nextElementSibling); //prints item no3 
itemList.children[1].nextElementSibling.textContent += " #nextElementSibling";

//previousElementSibling
itemList.children[1].previousElementSibling.textContent += " #previousElementSibling";
//prints item no 1

itemList.children[1].id = "Monkey";
//item 2 li ID changed from list-group.item to Monkey

//////////////////////////////////////////////////////////////////
//createElement
//setAttribute
//this.ID = 

//create new div
let newDiv = document.createElement("div");

//add className
newDiv.className = "card card-body";

newDiv.setAttribute("myAttr", " This is a newDiv ");

//create text node
let textDiv = document.createTextNode(" this is a new text node for the div ");

newDiv.appendChild(textDiv);
console.log(newDiv);
//writes - <div class="card card-body" myattr=" This is a newDiv ">

console.log(newDiv.firstChild);
//writes - #text " this is a new text node for the div "

//insert Div inbetween container and main div.
let container = document.querySelector(".container");
let mainDiv = document.querySelector("#main"); //main is already inside container

container.insertBefore(newDiv, mainDiv); //insert newDiv bfore mainDiv

newDiv.style.fontSize = "1.6em";
newDiv.style.background = "grey";

//////////////////////////////////////////////////////////////////

// create new li befor the first one
let newLi = document.createElement("li"); //create new li
liText = document.createTextNode("im the new li :)"); // create text
newLi.appendChild(liText); //add the text to the li
newLi.className = "list-group-item"; // we add the class to the li
let itemParent = document.querySelector("#items"); // we select the parent
let firstLi = document.querySelector(".list-group-item") // we select the element where we insert before
itemParent.insertBefore(newLi, firstLi); // we insert the new li before the first li

//////////////////////////////////////////////////////////////////

//my attempt at above - new li ended up at the end for some reason?!

// let newLi = document.createElement("li"); //create new li
// let textLi = document.createTextNode ("this is the new Li node");// create text
// newLi.appendChild(textLi); // we add the class to the li

// newLi.className = "list-group-item"; // we add the class to the li
// newLi.setAttribute("myAttr", "This is a new li");

// let item1 = document.querySelector("#items");  // we select the parent
// let liList = document.querySelector(".list-group.item"); // we select the element where we insert before

// item1.insertBefore(newLi, liList); // we insert the new li before the first li

// newLi.style.fontSize = "1.6em";
// newLi.style.background = "grey";


//////////////////////////////////////////////////////////////////


// ANOTHER WAY to create new li befor the first one
// // let newLi = document.createElement("li"); //create new li
// newLi.textContent="im the new li :)";
// newLi.className="list-group-item"; // we add the class to the li
// let itemParent=document.querySelector("#items"); // we select the parent
// let firstLi=document.querySelector(".list-group-item") // we select the element where we insert before
// itemParent.insertBefore(newLi,firstLi); // we insert the new li before the first li


//////////////////////////////////////////////////////////////////

let btn1 = document.getElementById("btn1");
btn1.addEventListener("dblclick", btnClick); //callback function

function btnClick(e) {
    document.getElementById("header-title").textContent = "changed"
    console.log(e);
    console.log(e.target.class);
    console.log(e.target.id);
    document.getElementById("output").innerHTML = "<h3>" + e.target.id + "<h3/>";
    console.log(e.type);
};


//////////////////////////////////////////////////////////////////

//adding the entry from the input as ul

let form = document.getElementById("formItems");
form.addEventListener("submit", addItem)
function addItem(e) {
    e.preventDefault(); //prevent form submit

    //get the input value
    let newItem = document.getElementById("item").value;

    //create new li element
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    //select the ul
    let ul = document.getElementById("items");
    // ul.appendChild(li); //added li to ul
    itemParent.insertBefore(li, firstLi);// add to the top of the list

    //add the delete button
    let delBut = document.createElement("button");
    delBut.className = "bnt btn-danger btn-group-lg float-right delete";
    //append text to the delete button
    delBut.innerHTML = "X";
    //delBut.appendChild(document.createTextNode("X")); same as above

    li.appendChild(delBut)
};

//delete the li using the button
let ul = document.getElementById("items");
ul.addEventListener("click", removeItem);
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        ul.removeChild(e.target.parentElement);
    }
    console.log(e.target.classList);


//contains example - will show class found when "delete" is in classList
    if(e.target.classList.contains("delete")){
        console.log("class found");
        console.log(e.target.classList);
    }
    else{
        console.log("class NOT found");        
    }
};

//////////////////////////////////////////////////////////////////
//filter searched items

let inputFilter = document.getElementById("filter");

inputFilter.addEventListener("keyup", filterItems);
function filterItems(e){
    
    let text = e.target.value.toLowerCase();

    //search for all the li
    let liItems = ul.getElementsByTagName("li");
    
    for(let i= 0; i <liItems.length; i++){
        let liText = liItems[i].firstChild.textContent;
        
        if (liText.toLowerCase().indexOf(text)!= -1){
            liItems[i].style.display ="block";
        }
        else{
            liItems[i].style.display="none";
        }
    }
}

