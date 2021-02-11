const express = require("express");

const {
  logUserIn,
  recoverPassword,
  registerUser,
} = require("../controllers/auth.controller");

const router = express.Router();

// Create New Sessions
router.post("/register", registerUser);

// Get All Sessions
router.post("/log-in", logUserIn);

router.post("/password-reset", recoverPassword);

module.exports = router;
