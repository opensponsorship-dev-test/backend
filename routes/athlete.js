const express = require("express");
const {getAthletes, createAthlete, updateAthlete} = require("../controllers/athlete");
const router = express.Router();
const advancedResults = require("../middleware/advancedResults");
const Athlete = require("../Models/Athlete");

router.route("/").get(advancedResults(Athlete), getAthletes).post(createAthlete);
router.route("/:id").put(updateAthlete);
module.exports = router;
