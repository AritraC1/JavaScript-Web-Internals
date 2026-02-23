const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser } = require("../service/auth");

const handleUserSignup = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  // After successful signup, send the user to the login page
  return res.redirect("/login");
};

const handleUserSignin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user)
    // On failure, redirect back to the login page (no separate error page)
    return res.redirect("/login");

  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  // On successful signin redirect to the app UI
  return res.redirect("/app");
};

module.exports = {
  handleUserSignup,
  handleUserSignin,
};
