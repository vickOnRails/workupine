const Session = require("../models/session.model");
const mongoose = require("mongoose");

// Create work session
exports.createSession = (req, res) => {
  const {
    userId,
    sessionType,
    startTime,
    endTime,
    quality,
    achievements,
    challenges,
    nextSessionGoals,
  } = req.body;

  const newSession = new Session({
    _id: mongoose.Types.ObjectId(),
    userId,
    sessionType,
    startTime,
    endTime,
    quality,
    achievements,
    challenges,
    nextSessionGoals,
  });

  newSession
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Entry Created",
        createdSession: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
};

// Get all sessions
exports.getAllSessions = (req, res) => {
  Session.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) =>
      res.status(500).json({
        error: err.message,
      })
    );
};

// Get single session
exports.getSession = (req, res) => {
  const { sessionId } = req.params;

  Session.findById(sessionId)
    .then((result) => {
      if (!result)
        res.status(404).json({
          message: "Session not found",
        });

      res.status(200).json({
        session: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
};

// Edit session
exports.editSession = (req, res) => {
  const { sessionId } = req.params;
  const sessionValues = req.body;

  Session.findByIdAndUpdate(sessionId, { ...sessionValues })
    .exec()
    .then((result) => {
      if (!result)
        res.status(404).json({
          message: "Session does not exist",
        });

      res.status(200).json({
        message: "Session updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

// delete session
exports.deleteSession = (req, res) => {
  const { sessionId } = req.params;

  Session.find({ _id: sessionId })
    .then((result) => {
      if (!result.length > 0) {
        res.status(404).json({
          message: "Session not found",
        });
      }

      Session.remove({ _id: sessionId }).then((doc) => {
        if (!doc)
          res.status(404).json({
            message: "Session not found",
          });

        res.status(204).json({
          message: "Session deleted successfully",
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
};
