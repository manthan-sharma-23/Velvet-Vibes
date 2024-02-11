const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Mongo_URI = process.env.MONGOURL;

console.log(Mongo_URI)
async function connectToMongo() {
  try {
    const result = await mongoose.connect(Mongo_URI);
    if (result) {
      console.log("Connected to Mongo succesfully");
    } else {
      console.log("Couldn't connect to Mongo succesfully");
    }
  } catch (error) {
    console.log(error)

  }
}

module.exports = connectToMongo;
