const User = require("../model/userModel");

// Health Check
const healthCheck = (req, res) => {
  res.send("The server is running");
};

// Create User
const createUser = async (req, res) => {
  const body = req.body;

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({
      message: "Missing Fields",
    });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  return res.status(201).json({
    message: "Success",
    data: result,
  });
};

// Get All Users
const getAllUsers = async (req, res) => {
  const allDbUsers = await User.find({});

  const html = `
    <ul>
    ${allDbUsers
      .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
      .join("")}
    </ul>
    `;

  return res.status(200).send(html);
};

// Get User by ID
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.json(user);
};

// Update User
const updateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  return res.status(200).json({ status: "success" });
};

// Delete User
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({ status: "success" });
};

module.exports = {
  healthCheck,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
