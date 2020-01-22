const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected : ${conn.connection.host} `.cyan.bold);
  } catch (e) {
    return console.log("Is not connected");
  }
};
module.exports = connectDB;
