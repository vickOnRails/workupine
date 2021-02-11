const express = require("express");

const {
  getAllSessions,
  createSession,
  getSession,
  editSession,
  deleteSession,
} = require("../controllers/sessions.controllers");

const router = express.Router();

// Create New Sessions
router.post("/", createSession);

// Get All Sessions
router.get("/", getAllSessions);

router.get("/:sessionId", getSession);

router.put("/", editSession);

router.delete("/", deleteSession);

module.exports = router;
