const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // generate ID from mongo
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Regexp to check the email against
      match: /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/,
      unique: true,
      // convert all values to lowercase in db
      lowercase: true,
    },
    fullName: {
      type: String,
      // Trim beginning and end of entered names string
      trim: true,
      required: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      role: {
        type: String,
        default: "user",
      },
    },
  },
  // include timestamps
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// TODO: Store hashed password
module.exports = User;
