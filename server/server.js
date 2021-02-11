const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    welcome: "Welcome Home",
  });
});

app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  console.log(`Server started at PORT ${PORT}`);
});
