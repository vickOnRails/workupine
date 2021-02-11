const express = require("express");

const router = express.Router();

// Create New Sessions
router.post("/", (req, res) => {
  res.json({
    route: "Create Session",
  });
});

// Get All Sessions
router.get("/", (req, res) => {
  res.json({
    route: "Get All Session",
  });
});

router.get("/:sessionId", (req, res) => {
  res.json({
    route: "Get Single Session",
  });
});

router.put("/", (req, res) => {
  res.json({
    route: "Edit Session",
  });
});

router.delete("/", (req, res) => {
  res.json({
    route: "Delete Session",
  });
});

module.exports = router;
