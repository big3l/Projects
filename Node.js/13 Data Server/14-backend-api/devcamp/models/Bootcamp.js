const mongoose = require("mongoose");
const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [40, "Max 40 characters exceeded"]
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [150, "Max 150 characters exceeded"]
  },
  website: {
    type: String,
    required: true,
    unique: true,
    //  match: ["//https?://(www.)?[-a-zA-Z]"]
  },
  email: {
    type: String,
    unique: true,
    required: true
    // [
    //   "^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$.",
    //   "Please add a valid email"
    // ]
  },
  address: {
    type: String,
    unique: true,
    required: [true, "Please enter an address"]
  },
  photo: {
    type: String,
    default: "no-photo.jpg"
  }
});
module.exports = mongoose.model("Bootcamp", BootcampSchema);
