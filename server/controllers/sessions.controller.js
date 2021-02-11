exports.createSession = (req, res) => {
  res.json({
    route: "Create Session",
  });
};

exports.getAllSessions = (req, res) => {
  res.json({
    route: "Get All Session",
  });
};

exports.getSession = (req, res) => {
  res.json({
    route: "Get Single Session",
  });
};

exports.editSession = (req, res) => {
  res.json({
    route: "Edit Session",
  });
};

exports.deleteSession = (req, res) => {
  res.json({
    route: "Delete Session",
  });
};
