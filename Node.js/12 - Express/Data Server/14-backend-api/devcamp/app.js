const express = require("express");
const dotenv = require("dotenv");
const colors = require('colors');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red); // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
console.log('Zebras are really stripey'.zebra); // Drops the bass


// Load ENV variables
dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Add the middleware
const logger = require("./middleware/logger");
app.use(logger);

// Route files
const bootcamps = require("./routes/bootcamps");
// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

// Connect to database
const connectDB = require("./config/db");
connectDB();

// app.get("/", (req, res) => {
//   // res.send('HELLO FROM EXPRESS');
//   res.status(200).json({ sucess: true, data: { name: "FBW3" } });
// });

// app.get("/api/v1/bootcamps", (req, res) => {
//   res.status(200).json({ sucess: true, msg: "show all bootcamps" });
// });

// app.post("/api/v1/bootcamps", (req, res) => {
//   res.status(200).json({ sucess: true, msg: "Create new bootcamps" });
// });

// app.put("/api/v1/bootcamps/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ sucess: true, msg: `Update bootcamps ${req.params.id}` });
// });

// app.delete("/api/v1/bootcamps/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ sucess: true, msg: `Delete bootcamps ${req.params.id}` });
// });

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server Started on Port ${PORT} in ${process.env.NODE_ENV} mode`.magenta)
);

// handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  // close server & exit if you have error
  server.close(() => process.exit(1));
});
 