const express = require("express");
const router = express.Router();

const Question = require("../models/question.js");

// @route   GET api/questions/test
// @desc    Tests questions route
// @access  Public
router.get("/test", (req, res) => res.send("q route testing!"));

// @route   GET api/questions
// @desc    Get a new question from specified id
// @access  Public
router.get("/questions/:number", (req, res) => {
  console.log("sanity check");
  console.log(req.params.number);
  Question.findOne({ number: req.params.number })
    .then((question) => {
      if (question) {
        res.json(question);
      } else {
        res.status(404).json({ questionnotfound: "Question not found" });
      }
    })
    .catch((err) =>
      res.status(404).json({ questionnotfound: "Question not found" })
    );
});

router.put("/streaks/:streak", (req, res) => {
  const inserted_streak = new Streak({
    length: req.params.streak,
  });
  inserted_streak.save();
});

router.put("");

module.exports = router;
