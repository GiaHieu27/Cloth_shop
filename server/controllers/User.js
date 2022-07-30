const User = require("../models/User");
const users = require("../data/user");

exports.user = async (req, res) => {
  await User.remove({});
  const importUser = await User.insertMany(users);
  res.status(200).json(importUser);
};
