const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const Streak = require("./models/streak.js");
const Question = require("./models/question.js");
const routes = require("./routes/api");

const app = express();

// connecting to the db
connectDB();

// const example = new Streak({
//   length: 10,
// });
// example.save();

// const example_2 = new Question({
//   text: "Population of Ohio",
//   answer: 2,
//   number: 1,
// });
// example_2.save();

// setting up API routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

// open and listen on port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => res.send("Hello"));
