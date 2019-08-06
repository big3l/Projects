/////////////////////////////////////////////////////////////////////////////


let pName = document.getElementById("productName");
let pDesc = document.getElementById("productDesc");
let pCode = document.getElementById("productCode");
let addBtn = document.getElementById("addProduct");

let prodArr = [];
let prodObj = {};

prodObj.name = pName.value;
prodObj.desc = pDesc.value;
prodObj.code = pCode.value;

let strProd = JSON.stringify(prodObj); //put to string
localStorage.setItem("Product List", strProd);

let objProd = localStorage.getItem("Product List"); //put to object
document.getElementById("product").innerHTML = JSON.parse(objProd).name;

addBtn.addEventListener("click", function () {
    product.push(product.value);
    localStorage.setItem("Product List", product);
});






/////////////////////////////////////////////////////////////////////////////
















// Object within array
//   Key             value
// product    [{productName: "Apple iPhone", productDesc : "Product Desc", productCode: "20100110023"}];
//https://codepen.io/bradtraversy/pen/OrmKWZ
//setTimeOut for add to list confirmed message
// delete Product(el){
//   if(el.classList.contains('delete')){
//      el.parentElement.parentElement.remove();
//     }
// };

// //insert new elements...
// let h1 = document.body.childNodes[0];
// let newh2 = document.createElement("h2");

// newh2.innerHTML = " The new h2 has replaced h1";
// document.body.insertBefore(newh2, h1);