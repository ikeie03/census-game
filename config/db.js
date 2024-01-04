require('dotenv').config();
const mongoose = require("mongoose");
const db = `mongodb+srv://census-game-admin:${process.env.MONGODBKEY}@census-game.pvjjmlq.mongodb.net/?retryWrites=true&w=majority`

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
    try {
      await mongoose.connect(db);
      console.log("MongoDB is Connected...");
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };

module.exports = connectDB;