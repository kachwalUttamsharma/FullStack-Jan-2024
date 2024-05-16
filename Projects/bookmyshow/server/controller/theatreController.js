const Theatre = require("../model/theatreModel");
const show = require("../model/showModel");
const showModel = require("../model/showModel");

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

const addShowToTheatre = async (req, res) => {
  try {
    const newShow = new show(req.body);
    await newShow.save();
    res.send({
      success: true,
      message: "Show added successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getAllShowsByTheatre = async (req, res) => {
  try {
    const shows = await show
      .find({ theatre: req.body.theatreId })
      .populate("movie")
      .sort({
        createdAt: -1,
      });
    res.send({
      success: true,
      message: "Shows fetched successfully",
      data: shows,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteShow = async (req, res) => {
  try {
    await show.findByIdAndDelete(req.body.showId);
    res.send({
      success: true,
      message: "Show deleted successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getAllTheatresByMovie = async (req, res) => {
  try {
    const { movie, date } = req.body;
    const shows = await showModel
      .find({ movie, date })
      .populate("theatre")
      .sort({ createdAt: -1 });
    const uniqueTheatres = [];
    // {TheatreInformation, showinformation}
    shows.forEach((show) => {
      // check if given theatre is already present in uniquetheatre
      const theatre = uniqueTheatres.find(
        (theatre) => theatre._id == show.theatre._id
      );
      if (!theatre) {
        // filter and get all shows for given theatre
        const showsForThisTheatre = shows.filter(
          (showObj) => showObj.theatre._id == show.theatre._id
        );
        // map theatre and shows and push into unique theatre
        uniqueTheatres.push({
          ...show.theatre._doc,
          shows: showsForThisTheatre,
        });
      }
    });
    res.send({
      success: true,
      message: "Theatres fetched successfully",
      data: uniqueTheatres,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getShowById = async (req, res) => {
  try {
    const showData = await showModel
      .findById(req.body.showId)
      .populate("movie")
      .populate("theatre");
    res.send({
      success: true,
      message: "Show fetched Successfully",
      data: showData,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addTheatre,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
  getAllTheatresByOwnerId,
  addShowToTheatre,
  getAllShowsByTheatre,
  deleteShow,
  getAllTheatresByMovie,
  getShowById,
};
