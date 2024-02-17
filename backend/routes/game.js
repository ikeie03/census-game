// NOTE: it's erc

const express = require("express");
const router = express.Router();

const Question = require("../models/question.js");
const Streak = require("../models/streak.js");

// @route   GET api/questions/:number
// @desc    Get a new question from specified id number
// @access  Public
router.get("/questions/:number", (req, res) => {
  console.log("sanity check");
  console.log(req.params.number);
  Question.findOne({ number: req.params.number })
    .then((question) => {
      if (question) {
        res.json(question);
      } else {
        res.status(404).json({ questionNotFound: "Question not found" });
      }
    })
    .catch((err) =>
      res.status(404).json({ questionNotFound: "Question not found" })
    );
});

router.put("/streaks/:streak", (req, res) => {
  const inserted_streak = new Streak({
    length: req.params.streak,
  });
  inserted_streak.save();
});

module.exports = router;
