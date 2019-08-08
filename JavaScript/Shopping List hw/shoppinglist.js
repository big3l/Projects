/////////////////////////////////////////////////////////////////////////////


class List {
    constructor(pName, pDesc, pNum) {
        this.name = pName;
        this.desc = pDesc;
        this.num = pNum;
    }
};

class Product {
    static displayItems() {
        const items = Store.getItems();
        items.forEach((item) => Product.addItemToList(item));
    };

    static additemToList(item) {
        const list = document.querySelector('#item-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.desc}</td>
        <td>${item.num}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
        list.appendChild(row);
    };

    static deleteItem(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    };

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#list-form');
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    };

    static clearFields() {
        document.querySelector('#productName').value = '';
        document.querySelector('#procuctDescripton').value = '';
        document.querySelector('#productNumber').value = '';
    };
};

class Store {
    static getProducts() {
        let products;
        if (localStorage.getItem('products') === null) {
            products = [];
        } else {
            products = JSON.parse(localStorage.getItem('products'));
        }

        return products;
    }

    static addProduct(product) {
        const products = Store.getProducts();
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

    static removeProduct(num) {
        const products = Store.getProducts();

        products.forEach((item, index) => {
            if (item.num === num) {
                products.splice(index, 1);
            }
        });

        localStorage.setItem('products', JSON.stringify(products));
    }
};

// Display 
document.addEventListener('DOMContentLoaded', Product.displayItems);

// Add
document.querySelector('#list-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const pName = document.querySelector('#productName').value;
    const pDesc = document.querySelector('#procuctDescripton').value;
    const num = document.querySelector('#productNumber').value;

    // Validate
    if (pName === '' || pDesc === '' || num === '') {
        Product.showAlert('Please fill in all fields', 'danger');
    } else {
        // Instatiate
        const product = new List(pName, pDesc, num);

        // Add to UI
        Product.addProductToList(product);

        // Add to store
        Store.addProduct(product);

        // Show success message
        Product.showAlert('Product Added', 'success');

        // Clear fields
        Product.clearFields();
    }
});

// Event: Remove 
document.querySelector('#product-list').addEventListener('click', (e) => {
    // Remove from UI
    Product.deleteProductBook(e.target);

    // Remove from store
    Store.removeProduct(e.target.parentElement.previousElementSibling.textContent);

    // Show success message
    Product.showAlert('Product Removed', 'success');
});








// let pName = document.getElementById("productName");
// let pDesc = document.getElementById("productDesc");
// let pCode = document.getElementById("productCode");
// let addBtn = document.getElementById("addProduct");

// let prodArr = [];
// let prodObj = {};

// prodObj.name = pName.value;
// prodObj.desc = pDesc.value;
// prodObj.code = pCode.value;

// let strProd = JSON.stringify(prodObj); //put to string
// localStorage.setItem("Product List", strProd);

// let objProd = localStorage.getItem("Product List"); //put to object
// document.getElementById("product").innerHTML = JSON.parse(objProd).name;

// addBtn.addEventListener("click", function () {
//     product.push(product.value);
//     localStorage.setItem("Product List", product);
// });



// Object within array
//   Key             value
// product    [{productName: "Apple iPhone", productDesc : "Product Desc", productCode: "20100110023"}];
// https://codepen.io/bradtraversy/pen/OrmKWZ
// setTimeOut for add to list confirmed message
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