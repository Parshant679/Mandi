const mongoose = require("mongoose");
require("dotenv").config();
const URI =
  "mongodb+srv://parshantrajput12345:hqgEjR8qE97yLCWR@testcluster.zso9133.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster";

const connectDB = async () => {
  await mongoose
    .connect(
      URI
      //   {
      //     useCreateIndex: true,
      //     useFindAndModify: false,
      //     useNewUrlParser: true,
      //     useUnifiedTopology: true,
      //   }
    )
    .then(() => {
      console.log("MongoDB Connected");
    });
};

module.exports = connectDB;
