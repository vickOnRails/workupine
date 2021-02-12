const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const sessionRoutes = require("./routes/sessions.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Configure dotenv for environmental variables
require("dotenv").config();

mongoose
  .connect(process.env.DB_CONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Database connected`))
  .catch((err) => console.log(err.message));

const PORT = process.env.PORT || 5000;

// baseAPI for consistency
const baseAPIRoute = "/api";

// Apply morgan and bodyparser middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// api handler for work sessions
app.use(`${baseAPIRoute}/sessions`, sessionRoutes);
app.use(`${baseAPIRoute}/auth`, authRoutes);

// minimal error handling
app.use((req, res) => {
  res.json({
    error: "Page not found again",
  });
});

app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  console.log(`Server started at PORT ${PORT}`);
});
