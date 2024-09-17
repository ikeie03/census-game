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

const populate_db_router = require("./routes/popdb");
app.use("/addtodb", populate_db_router);

const game_one_router = require("./routes/game");
app.use("/base_game", game_one_router); // routes for the simplest, default game (hand-made questions about proportions)

// open and listen on port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => res.send("Hello"));
