const User = require("../models/user.model");
const mongoose = require("mongoose");

// TODO: Implement authentication
// Register User
exports.registerUser = (req, res) => {
  res.json({
    user: newUser,
  });
};

// Log User In
exports.logUserIn = (req, res) => {
  res.json({
    route: "Log User In",
  });
};

// Recover User Password
exports.recoverPassword = (req, res) => {
  res.json({
    route: "Recover Password",
  });
};
