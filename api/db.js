const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Mongo_URI = process.env.MONGOURL;
async function connectToMongo() {
  const result = await mongoose.connect(Mongo_URI);
  if (result) {
    console.log("Connected to MOngo succesfully");
  } else {
    console.log("Couldn't connect to MOngo succesfully");
  }
}

module.exports = connectToMongo;
