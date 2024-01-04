const express = require('express');
const connectDB = require('./config/db')
const mongoose = require("mongoose");
const Streak = require('./models/streak.js');
const Question = require('./models/question.js')
const app = express();

// connecting to the db
connectDB(); 


// 
// const example = new Streak({
//     length: 10
// })
// example.save();

// const example_2 = new Question({
//     text: "Population of Ohio",
//     answer: 2,
//     number: 1
// })
// example_2.save()

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.get('/', (req, res) => res.send('Hello'));

// mongodb+srv://census-game-admin:<password>@census-game.pvjjmlq.mongodb.net/?retryWrites=true&w=majority

