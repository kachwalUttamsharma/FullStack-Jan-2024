const Theatre = require("../model/theatreModel");

const addTheatre = async (req, res) => {
  try {
    const newTheatre = new Theatre(req.body);
    await newTheatre.save();
    res.send({
      success: true,
      message: "Theatre Added Succesfully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const updateTheatre = async (req, res) => {
  try {
    await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
    res.send({
      success: true,
      message: "Theatre Updated Successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteTheatre = async (req, res) => {
  try {
    await Theatre.findByIdAndDelete(req.body.theatreId);
    res.send({
      success: true,
      message: "Theatre Deleted Successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getAllTheatres = async (req, res) => {
  try {
    const theatre = await Theatre.find().populate("owner");
    res.send({
      success: true,
      message: "Theatre Fetched Successfully",
      data: theatre,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getAllTheatresByOwnerId = async (req, res) => {
  try {
    const theatres = await Theatre.find({ owner: req.body.owner });
    res.send({
      success: true,
      message: "Theatre fetched Succesfully",
      data: theatres,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  addTheatre,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
  getAllTheatresByOwnerId,
};
