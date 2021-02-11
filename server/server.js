const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    welcome: "Welcome Home",
  });
});

app.listen(5000, (err) => {
  if (err) console.log(err.message);
  console.log(`Server started at PORT ${5000}`);
});
