const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUserInfo,
} = require("../controller/userController");
const { validateJWTToken } = require("../middleware/authMiddleware");
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
// protected route api
userRouter.get("/getCurrentUser", validateJWTToken, getCurrentUserInfo);

module.exports = userRouter;
