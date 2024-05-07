const mongoose = require("mongoose");

// to do multiple genre's
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  duration: {
    type: Number,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  language: {
    type: String,
    require: true,
  },
  releaseDate: {
    type: Date,
    require: true,
  },
  poster: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("movies", movieSchema);
