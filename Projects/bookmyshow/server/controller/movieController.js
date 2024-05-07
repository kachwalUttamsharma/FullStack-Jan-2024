const movieModel = require("../model/movieModel");

const AddMovie = async (req, res) => {
  try {
    const newMovie = new movieModel(req.body);
    await newMovie.save();
    res.send({
      success: true,
      message: "Movie Added SuccessFully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  AddMovie,
};
