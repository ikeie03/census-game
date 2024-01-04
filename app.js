const express = require('express');
const connectDB = require('./config/db')
const app = express();

// connecting to the db
connectDB();


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.get('/', (req, res) => res.send('Hello'));

// mongodb+srv://census-game-admin:<password>@census-game.pvjjmlq.mongodb.net/?retryWrites=true&w=majority

