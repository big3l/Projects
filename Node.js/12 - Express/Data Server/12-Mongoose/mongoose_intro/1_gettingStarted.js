const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/shop", { useNewUrlParser: true });

// Defining a Schema
let productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

// create a class method for log messaging
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
productSchema.methods.logMessage = function(){
    let message = `The product ${this.name} with price the ${this.price} has been saved`;
    console.log(message);    
};

// compile the schema into a model (collection name)
let Product = mongoose.model("Product", productSchema);

// create product documents
let samsung = new Product({ name: "Samsung Galaxy One", price: 399.99 });
console.log(samsung.name);
console.log(samsung.price);

let apple = new Product({ name: "iPhone X", price: 299.99 });
console.log(apple.name);
console.log(apple.price);

// Establish a connection
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:")); // standard error line built in, needed in all projects
db.once("open", function() {
  // make sure you start mongo to connect!
  console.log("we're connected!");

  // insert samsung to the database
  samsung.save(function(err, samsung) {
    if (err) return console.error(err);
    // console.log("samsung saved!");
    samsung.logMessage();
    db.close();
  });

  //insert apple to the database
  apple.save(function(err, apple) {
    if (err) return console.error(err);
    // console.log("apple saved!");
    apple.logMessage();
    db.close();
  });
});


