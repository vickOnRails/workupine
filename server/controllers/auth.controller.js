exports.registerUser = (req, res) => {
  res.json({
    route: "Register User",
  });
};

exports.logUserIn = (req, res) => {
  res.json({
    route: "Log User In",
  });
};

exports.recoverPassword = (req, res) => {
  res.json({
    route: "Recover Password",
  });
};
