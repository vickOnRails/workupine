const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    // generate ID from mongo
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    sessionType: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    quality: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    achievements: {
      type: String,
      required: true,
    },
    challenges: {
      type: String,
      required: true,
    },
    nextSessionGoals: {
      type: String,
      required: true,
    },
  },
  // include timestamps
  { timestamps: true }
);

const Session = mongoose.model("Session", sessionSchema);

// TODO: Store hashed password
module.exports = Session;
