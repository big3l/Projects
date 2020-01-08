const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

// productSchema.methods.logMessage = function() {
//   let message = `The product ${this.name} with price the ${this.price} has been saved`;
//   console.log(message);
// };

let Product = mongoose.model("Product", productSchema);

module.exports = Product;