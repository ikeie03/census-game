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
  id_number: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("question", QuestionSchema);
