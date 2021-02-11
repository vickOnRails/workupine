const express = require("express");
const sessionRoutes = require("./routes/sessions.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

const PORT = process.env.PORT || 5000;

const baseAPIRoute = "/api";

// api handler for work sessions
app.use(`${baseAPIRoute}/sessions`, sessionRoutes);
app.use(`${baseAPIRoute}/auth`, authRoutes);

// minimal error handling
app.use((req, res) => {
  res.json({
    error: "Page not found",
  });
});

app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  console.log(`Server started at PORT ${PORT}`);
});
