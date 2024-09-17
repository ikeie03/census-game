const express = require("express");
const router = express.Router();

const Question = require("../models/question.js");

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
    // gets the relevant statistics for every state
    const res = await fetch(
      `https://api.census.gov/data/2022/acs/acsse?get=NAME,${statistic_id}&for=state:*`
    );
    const state_data_arr = await res.json();
    console.log(state_data_arr);
    for (let i = 0; i < state_data_arr.length; i++) {
      state_data_arr[i];
      const inserted_question = new Question({
        length: req.params.streak,
      });
    }
    res.status(200).json({ completed: "completed" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "error" });
  }
});

module.exports = router;

let population_arr = [
  ["NAME", "K200104_001E", "state"],
  ["Arkansas", "3045637", "05"],
  ["Arizona", "7359197", "04"],
  ["Alabama", "5074296", "01"],
  ["Alaska", "733583", "02"],
  ["California", "39029342", "06"],
  ["Colorado", "5839926", "08"],
  ["Connecticut", "3626205", "09"],
  ["Delaware", "1018396", "10"],
  ["District of Columbia", "671803", "11"],
  ["Florida", "22244823", "12"],
  ["Georgia", "10912876", "13"],
  ["Hawaii", "1440196", "15"],
  ["Idaho", "1939033", "16"],
  ["Illinois", "12582032", "17"],
  ["Indiana", "6833037", "18"],
  ["Iowa", "3200517", "19"],
  ["Kansas", "2937150", "20"],
  ["Kentucky", "4512310", "21"],
  ["Louisiana", "4590241", "22"],
  ["Maine", "1385340", "23"],
  ["Maryland", "6164660", "24"],
  ["Massachusetts", "6981974", "25"],
  ["Michigan", "10034118", "26"],
  ["Minnesota", "5717184", "27"],
  ["Mississippi", "2940057", "28"],
  ["Missouri", "6177957", "29"],
  ["Montana", "1122867", "30"],
  ["Nebraska", "1967923", "31"],
  ["Nevada", "3177772", "32"],
  ["New Hampshire", "1395231", "33"],
  ["New Jersey", "9261699", "34"],
  ["New Mexico", "2113344", "35"],
  ["New York", "19677151", "36"],
  ["North Carolina", "10698973", "37"],
  ["North Dakota", "779261", "38"],
  ["Ohio", "11756058", "39"],
  ["Oklahoma", "4019800", "40"],
  ["Oregon", "4240137", "41"],
  ["Pennsylvania", "12972008", "42"],
  ["Rhode Island", "1093734", "44"],
  ["South Carolina", "5282634", "45"],
  ["South Dakota", "909824", "46"],
  ["Tennessee", "7051339", "47"],
  ["Texas", "30029572", "48"],
  ["Utah", "3380800", "49"],
  ["Vermont", "647064", "50"],
  ["Virginia", "8683619", "51"],
  ["Washington", "7785786", "53"],
  ["West Virginia", "1775156", "54"],
  ["Wisconsin", "5892539", "55"],
  ["Wyoming", "581381", "56"],
  ["Puerto Rico", "3221789", "72"],
];
