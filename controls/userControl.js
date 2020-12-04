
const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
  const { fullname, username, email, password } = req.body;

  const emailRegex = /@gmail.com|@yahoo.com/;

  if (!emailRegex.test(email)) throw "Email is not supported from your domain.";
  if (password.length < 9) throw "Password must be atleast 9 characters long.";

  const userExists = await User.findOne({
    username,
  });

  const emailExists = await User.findOne({
    email,
  });

  if (userExists) throw "username already exits.";

  if (emailExists) throw "email already exits.";

  const user = new User({
    fullname,
    username,
    email,
    password: sha256(password + process.env.ENC),
  });

  await user.save();

  res.json({
    message: " [" + username + "] has been registered !",
  });
};

exports.login = async (req, res) =>
 {
  const { username, password } = req.body;
  const user = await User.findOne({
    username,
    password: sha256(password + process.env.ENC),
});

  if (!user) throw "Username and Password did not match.";

  const token = await jwt.sign({ id: user.id }, process.env.CRYPT);

  res.json({message: "User logged in", token,});
};