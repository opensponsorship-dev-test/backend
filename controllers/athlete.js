const Athlete = require("../Models/Athlete");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

//@desc Get all athletes
//@route GET /api/athletes
//@access Public
exports.getAthletes = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@desc Create a new athlete
//@route POST /api/athletes
//@access Public
exports.createAthlete = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const athlete = await Athlete.create(req.body);
  await Athlete.findOneAndUpdate({_id: req.body.id}, {$push: {sports: req.body.sport}});
  res.status(200).json({success: true, athlete});
});

//@desc    Update athlete
//@route   PUT /api/athletes/:id
//@access  Public
exports.updateAthlete = asyncHandler(async (req, res, next) => {
  let updatedAthlete = await Athlete.findById(req.params.id);

  if (!updatedAthlete) {
    return next(new ErrorReponse(`Athlete not found with id of ${req.params.id}`, 404));
  }

  updatedAthlete = await Athlete.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({success: true, updatedAthlete});
});
