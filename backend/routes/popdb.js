const express = require("express");
const router = express.Router();

const Question = require("../models/question.js");

const stateNameToPopulation = require("../static/stateNameToPopulation.js");

// tasks: hard code population array
// deez the nuts
// put in the mongodb database in the "questions" collection

// notes: "state" is input as "S05" with the number being the state census number

// @route   PUT popdb/question
// @desc    Adds a new question to the database
// @access  Public
router.put("/question", async (req, res) => {
  const { statistic_id, question_text } = req.body;
  // https://api.census.gov/data/2022/acs/acsse?get=NAME,K201101_004E&for=state:*
  try {
    // gets the relevant statistics for all states
    const state_data = await fetch(
      `https://api.census.gov/data/2022/acs/acsse?get=NAME,${statistic_id}&for=state:*`
    );
    const state_data_arr = await state_data.json();
    console.log(state_data_arr);

    const questionWithMaxId = await Question.findOne().sort({ id_number: -1 });
    const maxIdNumber = questionWithMaxId ? questionWithMaxId.question_id : 0;

    // the first number
    for (let i = 1; i < state_data_arr.length; i++) {
      let stateName = state_data_arr[i][0];
      let question_id = maxIdNumber + i;
      let stateDataValue = state_data_arr[i][1];
      if (!stateDataValue) {
        continue;
      }
      let answer = stateDataValue / stateNameToPopulation[stateName];

      const inserted_question = new Question({
        text: question_text,
        state: stateName,
        answer: answer,
        question_id: question_id,
      });
      console.log(inserted_question);
      inserted_question.save();
    }
    res.status(200).json({ completed: "completed" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "error" });
  }
});

module.exports = router;
