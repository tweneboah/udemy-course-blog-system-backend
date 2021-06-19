const expressAsync = require("express-async-handler");
const User = require("../model/User");

const registerUserCtrl = expressAsync(async (req, res) => {
  //Check if user Exist
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) throw new Error("User Already exist");

  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

module.exports = { registerUserCtrl };
