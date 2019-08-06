/////////////////////////////////////////////////////////////////////////////
//local storage;
//this stores data in the browser. On browser refresh or restart, the data is
//stored. eg https://mdn.github.io/dom-examples/web-storage/
//can view local storage by selecting storage in the browser editor.
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

localStorage.setItem("myCat", "Tom"); //myCat is the "key", Tom is the value

let catName = localStorage.getItem("myCat");
document.getElementById("cat").innerHTML = "my cats name is : " + catName;

//change the cat name value
localStorage.setItem("myCat", "Lulu");
catName= localStorage.getItem("myCat");
document.getElementById("cat").innerHTML = "my cats name is : " + catName;

console.log(catName)

//localStorage.removeItem(" ");

/////////////////////////////////////////////////////////////////////////////

let person = {
    name: " John ",
    age: 39,
    job: " Tickler ",
    city: " Hamburg "
};

//converting person from object to string
let strPerson = JSON.stringify(person);
localStorage.setItem("Person Info", strPerson);

//converting string back to object
let objPerson = localStorage.getItem("Person Info");
document.getElementById("person").innerHTML = JSON.parse(objPerson).job;

console.log(localStorage);

/////////////////////////////////////////////////////////////////////////////

//print person elements in for loop
for (let i in person) {
    document.write(person[i]);
};

//shows a list of items in localstorage
for (let i in localStorage) {
    console.log(i)
};

//shows a list of the "key" items stored (myCat & personInfo).
for (let i = 0; i < localStorage.length; i++) {
    console.log((localStorage.key(i)));
};

/////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
