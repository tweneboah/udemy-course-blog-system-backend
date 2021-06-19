const User = require("../model/User");

const registerUserCtrl = async (req, res) => {
  console.log(req.body);
  //check if user Exists
  //   const userExists = await User.find({
  //     email: req?.body?.email,
  //   });
  //   if (userExists) throw new Error("User already Exists");
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { registerUserCtrl };
