const express = require("express");
const dotenv = require("dotenv");

// Load ENV variables
dotenv.config({ path: "./config/config.env" });

const app = express();

// Add the middleware
const logger = require('./middleware/logger');
app.use(logger);

// Route files
const bootcamps = require("./routes/bootcamps");
// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

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

app.listen(
  PORT,
  console.log(`Server Started on Port ${PORT} in ${process.env.NODE_ENV} mode`)
);
