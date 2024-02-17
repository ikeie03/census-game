const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const Streak = require("./models/streak.js");
const Question = require("./models/question.js");

const app = express();

// connecting to the db
connectDB();

// setting up API routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const game_one_routes = require("./routes/game");
app.use("/game", game_one_routes); // routes for the simplest, default game

// open and listen on port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => res.send("Hello"));
