const mongoose = require('mongoose');

const StreakSchema = new mongoose.Schema({
    length: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('streak', StreakSchema)