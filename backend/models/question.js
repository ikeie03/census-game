const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  answer: {
    type: Number,
    required: true,
  },
  question_id: {
    type: Number,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("question", QuestionSchema);
