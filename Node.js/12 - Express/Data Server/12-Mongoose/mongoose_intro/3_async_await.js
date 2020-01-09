const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/shop", { useNewUrlParser: true });

let productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

productSchema.methods.logMessage = function() {
  let message = `The product ${this.name} with price the ${this.price} has been saved`;
  console.log(message);
};

let Product = mongoose.model("Product", productSchema);

let samsung = new Product({ name: "Samsung Galaxy One", price: 399.99 });

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function() {
  console.log("we're connected!");

  // save samsung using async
  try {
    const product = new Product(samsung);
    await product.save();
    await console.log("Saved!");

    // find all samsung phones
    const found_products = await Product.find();
    await console.log("Found!");
    await console.log(JSON.stringify(found_products, null, 4));
    await console.log("End Found!");

    // find by id
    await console.log("Find by id");
    const found_products_with_id = await Product.findById(
      "5e159cd59843d32748879b48"
    );
    await console.log(JSON.stringify(found_products_with_id, null, 4));
    await console.log("End Find by id");

    // remove all products
    const remove_products = await Product.deleteMany({});
    // const remove_products = await Product.remove();
    await console.log(JSON.stringify(remove_products, null, 4));
    console.log("Products removed");
  } catch (e) {
    console.error(e);
  }
  db.close();
});
