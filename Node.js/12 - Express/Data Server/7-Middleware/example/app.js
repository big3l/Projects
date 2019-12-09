const express = require("express");
const app = express();
const path = require("path");
const logger = require("./middleware/logger");
const about = require("./routes/api/about");

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world");
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// set the static folder (index will be default.)
app.use(express.static(path.join(__dirname, "public")));

// Logger function in terminal/console
app.use(logger);

// About page
app.use(about);

// Members API Routes
app.use("/api/members", require("./routes/api/allmembers"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server start at port ${port}`);
});
