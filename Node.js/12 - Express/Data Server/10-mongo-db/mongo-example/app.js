const express = require("express");
const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

const app = express();
app.listen("3000", () => {
  console.log("Connected to server 3000");
});

app.get("/name", (req, res) => {
  res.send("<h1>Welcome to Mongo Example Homepage<h1>");
});

app.get("/all", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let mydb = db.db("shop");
    mydb
      .collection("items")
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
  });
});

app.get("/addCol", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let mydb = db.db("shop");
    mydb.createCollection("users", (err, res) => {
      if (err) throw err;
      console.log('Collection "Users" created');
      db.close();
    });
  });
  res.send("<h2>Collection created</h2>");
});

app.get("/addUser", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let mydb = db.db("shop");
    mydb.collection("users").insertOne(
      {
        name: "Daniel Lewis",
        email: "dan@gmail.com",
        phone: "0123568795456"
      },
      (err, res) => {
        if (err) throw err;
        console.log("User added to collection");
        db.close();
      }
    );
  });
  res.send("<h2>User added to collection</h2>");
});

app.get("/addUsers", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let mydb = db.db("shop");
    mydb.collection("users").insertMany(
      [
        {
          name: "Abigail Lewis",
          email: "abi@gmail.com",
          phone: 123568795456
        },
        { name: "Justin Lewis", email: "Jus@gmail.com", phone: 1232395846 },
        {
          name: "William Lewis",
          email: "William@gmail.com",
          phone: 5878768768738
        }
      ],
      (err, res) => {
        if (err) throw err;
        console.log("Multiple Users added to collection");
        db.close();
      }
    );
  });
  res.send("<h2>Multiple Users added to collection</h2>");
});

app.get("/allusers", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let mydb = db.db("shop");
    mydb
      .collection("users")
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
  });
});


app.get("/delallusers", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let mydb = db.db("shop");
    mydb.collection("users").deleteMany({}, (err, result) => {
      if (err) throw err;
      console.log("Users deleted");
      res.send("<h1>" + result.result.n + " Users were deleted" + " </h1>");
      db.close();
    });
  });
});

// atlas url on the cloud
const atlasUrl =
  "mongodb+srv://admin_dan:pissword@cluster0-ve6ob.mongodb.net/test?retryWrites=true&w=majority";

// connect with atlas cloud database
app.get("/atlas", (req, res) => {
  const client = new MongoClient(atlasUrl, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("shopdb").collection("articles");
    // perform actions on the collection object
    collection.find({}).toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
      client.close();
    });
  });
});

// adding items to cloud db
app.get("/atlasadd", (req, res) => {
  const client = new MongoClient(atlasUrl, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("shopdb").collection("articles");
    collection.insertMany(
      [
        { name: "another phone description", price: 999 },
        { name: "further phone stuff", price: 299 },
        { name: "some phoney phone description", price: 399 }
      ],
      (err, result) => {
        if (err) throw err;
        console.log("Items were added");
        client.close();
      }
    );
  });
  res.send("<h2>Multiple items were added to collection</h2>");
});

// delete items from cloud db
app.get("/atlasdel", (req, res) => {
  const client = new MongoClient(atlasUrl, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("shopdb").collection("articles");
    collection.deleteMany({}, (err, result) => {
      if (err) throw err;
      console.log("Items were removed");
      client.close();
    });
  });
  res.send("<h2>Multiple items were removed from collection</h2>");
});
