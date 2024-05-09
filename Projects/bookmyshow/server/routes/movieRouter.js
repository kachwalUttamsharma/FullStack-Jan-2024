const {
  AddMovie,
  getAllMovies,
  updateMovies,
  deleteMovies,
} = require("../controller/movieController");
const movieRouter = require("express").Router();

movieRouter.get("/getAllMovies", getAllMovies);
movieRouter.post("/addMovie", AddMovie);
movieRouter.post("/updateMovie", updateMovies);
movieRouter.post("/deleteMovie", deleteMovies);

module.exports = movieRouter;
