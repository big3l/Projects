/////////////////////////////////////////////////////////////////////////////
//Adding new key (personNumber) and value (PersonName)

let pNumber = document.getElementById("number");
let pName = document.getElementById("name");
let saveBtn = document.getElementById("save");
let delBtn = document.getElementById("delete");


saveBtn.addEventListener("click", function () {
    localStorage.setItem(pNumber.value, pName.value);
});

function showInfo() {
    let storage = localStorage;
    for (let i = 0; i < storage.length; i++) {
        console.log(storage.key(i) + " : " + storage.getItem(storage.key(i)));
    }
};

delBtn.addEventListener("click", function () {
    localStorage.clear();
    showInfo();
});

/////////////////////////////////////////////////////////////////////////////
//adding input to array in storage

let brand = document.getElementById("brand");
let addBrand = document.getElementById("add");

let cars = [];

addBrand.addEventListener("click", function () {
    cars.push(brand.value);
    localStorage.setItem("cars", cars);
    document.getElementById("carsInfo").innerHTML = localStorage.getItem("cars");
});


/////////////////////////////////////////////////////////////////////////////



// for (let i = 0; i < localStorage.length; i++) {
//     document.write((localStorage.getItem(localStorage.key(i))));
// };

//let objName = localStorage.getItem("pName");
// document.getElementById(pName.value).innerHTML = JSON.parse(objName).value;