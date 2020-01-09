var express = require("express");
var router = express.Router();
var faker = require("faker");
let Product = require("../models/Product");

router.get("/", async function(req, res, next) {
  try {
    const allProds = await Product.find();
    let rows = "";
    allProds.forEach(item => {
      rows += `<tr>
          <td> ${item.name}</td>
          <td> ${item.desc}</td>
          <td> ${item.price} € </td>
          <td style= 'color: ${item.color}'> ${item.color}</td>
          <td><button onclick="window.location='http://localhost:3000/products/delete?id=${item._id}'"
          style = "background: red; border-radius: 15px; padding: 8px">Delete</button></td>
          </tr>`;
    });
    let addDiv = `<div><button onclick = "window.location='http://localhost:3000/products/addOne'" 
    style = 'background: lightgreen; border-radius: 15px; padding: 8px' >Add New Product</button></div> `;

    let thead =
      "<thead><th> Name </th><th> Description </th><th> Price </th><th> Color </th></thead>";
    let dataTable = addDiv + " <table>" + thead + rows + "</table>";
    res.send(dataTable);
  } catch (e) {
    next(e);
  }
  //res.send("<h1> all the products </h1>");
});

router.get("/delete", (req, res, next) => {
  let productID = req.query.id;
  Product.deleteOne({ _id: productID }, (err, res) => {
    if (err) throw err;
  });
  res.redirect("http://localhost:3000/products/");
});

router.get("/addOne", (req, res, next) => {
  let newProduct = new Product({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    color: faker.commerce.color(),
    desc: faker.commerce.productAdjective()
  });
  newProduct.save(function(err, res) {
    if (err) return console.error(err);
  });
  res.redirect("http://localhost:3000/products/");
});

module.exports = router;
