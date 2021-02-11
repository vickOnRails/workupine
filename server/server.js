const express = require("express");
const sessionRoutes = require("./routes/sessions");

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/sessions", sessionRoutes);

app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  console.log(`Server started at PORT ${PORT}`);
});
