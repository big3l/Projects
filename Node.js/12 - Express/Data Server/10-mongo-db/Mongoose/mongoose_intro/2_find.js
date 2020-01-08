const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/shop", { useNewUrlParser: true });

let productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

let Product = mongoose.model("Product", productSchema);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we're connected!");

  // find all products
  Product.find(function(err, Products) {
    if (err) return console.error(err);
    console.log(JSON.stringify(Products, null, 4));
    db.close();
  });
});
