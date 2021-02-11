const User = require("../models/user.model");
const mongoose = require("mongoose");

// Register User
exports.registerUser = (req, res) => {
  const newUser = new User({
    _id: mongoose.Types.ObjectId(),
    fullName: "Victor",
    hashedPassword: "12345",
  });

  console.log(newUser);
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
