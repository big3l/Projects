///////////////////////////////////////////////////////////////7

let myBtn = document.getElementById("myBtn");
let myBtn1 = document.getElementById("myBtn1");
let myBtn2 = document.getElementById("myBtn2");
let myBtn3 = document.getElementById("myBtn3");
let clearBtn = document.getElementById("clearBtn");

let myList = document.getElementById("list");

console.log(myList.children[1].innerHTML); //Coffee
console.log(myList.firstElementChild.innerHTML); //Water
console.log(myList.lastElementChild.innerHTML); //Tea

// myBtn.onclick = function () {
//     document.getElementById("content").innerHTML = myList.children[1].innerHTML;
// };

//The same as above using addEvent Listner
myBtn.addEventListener("click", function () {
    document.getElementById("content").innerHTML = "The selected content is " + myList.children[2].innerHTML;
    //the 2nd child of mylist is Tea
});

myBtn1.onclick = function () {
    document.getElementById("content").innerHTML = document.body.childNodes[5].nodeName;
    //the 5th childNode is Button
};

let children = document.getElementById("list").children;
console.log(children); //children of "list" are all of the <li>'s

myBtn2.addEventListener("click", function () {
    for (let i = 0; i < children.length; i++) {
        document.getElementById("content").innerHTML += children[i].innerHTML + "<br>";
    }
});

//same above but using onclick and without "for" loop
let counter = 0; //this is the counter instead of [i] in for loop
myBtn3.onclick = function () {
    if (counter == children.length) {
        counter = 0;
    }
    document.getElementById("content").innerHTML += children[counter].innerHTML + "<br>";
    counter++;
}

//Clear all of the content
clearBtn.addEventListener("click", function () {
    document.getElementById("content").innerHTML = "";
});

//Attributes
console.log(document.getElementById("list").attributes[0]);
//Prints the attributes within "content": 
// [ id="content", style="height: 100px; border: 2px solid blue;" ]

let infoBtn = document.getElementById("info");
let imgAttr = document.getElementById("myImg").attributes;
let imgInfo = document.getElementById("imgInfo").innerHTML;

//When button clicked, will print attribute no.2 name and value (alt = picsum image)
// infoBtn.addEventListener("click", function () {
//     let imgAttr = document.getElementById("myImg").attributes[2].name + " = " + document.getElementById("myImg").attributes[2].value;
//     document.getElementById("imgInfo").innerHTML = imgAttr;
// })

//When button clicked, will print all attributes within "myImg"
infoBtn.addEventListener("click", function () {
    for (let i = 0; i < imgAttr.length; i++) {
        imgInfo += imgAttr[i].name + " = " + imgAttr[i].value + "<Br>";
    }
    document.getElementById("imgInfo").innerHTML = imgInfo;
});

