const express = require("express");
const {
  healthCheck,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// Health check
router.get("/", healthCheck);

// Users
router.post("/users", createUser);
router.get("/users", getAllUsers);

router
  .route("/users/:id")
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;