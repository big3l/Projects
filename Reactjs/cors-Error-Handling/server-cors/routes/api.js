const express = require('express');
const router = express.Router();

router.get("/hello", (req, res, next) => {
  res.status(400).json({ message: "Hello Darkness my old Friend" });
});

module.exports = router;
