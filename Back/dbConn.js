const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Stage:Stage123@ttdb.onmfblw.mongodb.net/TTDB",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDB;
