const express = require("express");
const sessionRoutes = require("./routes/routes.sessions");

const app = express();

const PORT = process.env.PORT || 5000;

// api handler for work sessions
app.use("/api/sessions", sessionRoutes);

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
