// NOTE: it's erc

const express = require("express");
const router = express.Router();

const Question = require("../models/question.js");
const Streak = require("../models/streak.js");

// @route   GET base_game/questions/:number
// @desc    Get a new question from specified id number
// @access  Public
router.get("/questions/:number", (req, res) => {
  console.log("sanity check");
  console.log(req.params.number);
  Question.findOne({ number: req.params.number })
    .then((question) => {
      if (question) {
        res.status(200).json(question);
      } else {
        res.status(404).json({ questionNotFound: "Question not found" });
      }
    })
    .catch((err) =>
      res.status(404).json({ questionNotFound: "Question not found" })
    );
});

// @route   PUT base_game/streaks/:number
// @desc    Adds data about the streak
// @access  Public
router.put("/streaks/:streak", (req, res) => {
  const inserted_streak = new Streak({
    length: req.params.streak,
  });
  inserted_streak.save();
});

module.exports = router;
