const express = require("express");

const {
  getAllSessions,
  createSession,
  getSession,
  editSession,
  deleteSession,
} = require("../controllers/sessions.controller");

// All handler functions are moved to another file to house container logic
const router = express.Router();

// Create New Sessions
router.post("/", createSession);

// Get All Sessions
router.get("/", getAllSessions);

router.get("/:sessionId", getSession);

router.put("/:sessionId", editSession);

router.delete("/:sessionId", deleteSession);

module.exports = router;
