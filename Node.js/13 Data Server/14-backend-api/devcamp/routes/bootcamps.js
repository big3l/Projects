const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require("../controllers/bootcamps");
const router = express.Router();
router
  .route("/")
  .get(getBootcamps)
  .post(createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// THIS CODE WAS CONVERTED INTO THE CONTROLLERS IMPORTED ABOVE
// router.get("/", (req, res) => {
//   res.status(200).json({ sucess: true, msg: "Show all bootcamps" });
// });

// router.get("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ sucess: true, msg: `Show all bootcamps ${req.params.id}` });
// });

// router.post("/", (req, res) => {
//   res.status(200).json({ sucess: true, msg: "Create new bootcamps" });
// });

// router.put("/:id", (req, res) => {
//   res.status(200).json({ sucess: true, msg: `Update bootcamps ${req.params.id}` });
// });

// router.delete("/:id", (req, res) => {
//   res.status(200).json({ sucess: true, msg: `delete bootcamps ${req.params.id}` });
// });
module.exports = router;
