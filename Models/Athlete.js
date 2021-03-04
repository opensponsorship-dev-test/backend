const mongoose = require("mongoose");

const AthleteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please add your name"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Please add your date of birth"],
    },
    location: {
      type: String,
      trim: true,
      required: [true, "Please add your location"],
    },
    team: {
      type: String,
      trim: true,
      required: [true, "Please add your team"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    sports: {
      type: [String],
      required: [true, "Please add your sports"],
    },
    about: {
      type: String,
      required: [true, "Please add an about me"],
    },
    interests: {
      type: String,
      required: [true, "Please add an interest"],
    },
    image: {
      type: String,
      required: [true, "Please add an image"],
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Athlete", AthleteSchema);
