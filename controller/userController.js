const User = require("../models/userModels");

const getUser = async (req, res) => {
  const user = await User.find();
  res.json(user);
};

const createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
};

module.exports = { getUser, createUser };
