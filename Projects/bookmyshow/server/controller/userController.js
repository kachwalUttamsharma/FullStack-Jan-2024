const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const userExisits = await userModel.findOne({ email: req.body?.email });

    if (userExisits) {
      return res.status(200).json({
        success: false,
        message: "User Already Exist",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body?.password, salt);
    req.body.password = hashedPassword;
    const user = new userModel(req.body);
    const response = await user.save();
    res.status(200).json({
      success: true,
      response: response,
      message: "Registration Successfull, please login",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error || "user has entered invalid information",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    // 1 check if users email is present in db
    const userExist = await userModel.findOne({ email: req.body?.email });
    if (!userExist) {
      return res.status(200).send({
        success: false,
        message: "User Email doesnt exist",
      });
    }
    // if email is present use password stored in db and required from client
    // then compare it
    const validatePassword = await bcrypt.compare(
      req.body?.password,
      userExist.password
    );
    if (!validatePassword) {
      return res.status(400).send({
        success: false,
        message: "Incorrect Password",
      });
    }
    const token = jwt.sign({ userId: userExist._id }, process.env.SecretKey, {
      expiresIn: "1d",
    });
    return res.status(200).send({
      success: true,
      message: "User Logged In",
      data: token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error || "user has entered invalid information",
    });
  }
};

// profile information
const getCurrentUserInfo = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId).select("-password");
    res.send({
      success: true,
      message: "User Details Fetched Successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  registerUser,
  loginUser,
  getCurrentUserInfo,
};
