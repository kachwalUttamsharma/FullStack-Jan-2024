const {
  AddMovie,
  getAllMovies,
  updateMovies,
  deleteMovies,
} = require("../controller/movieController");
const { validateJWTToken } = require("../middleware/authMiddleware");
const movieRouter = require("express").Router();

movieRouter.get("/getAllMovies", validateJWTToken, getAllMovies);
movieRouter.post("/addMovie", validateJWTToken, AddMovie);
movieRouter.post("/updateMovie", validateJWTToken, updateMovies);
movieRouter.post("/deleteMovie", validateJWTToken, deleteMovies);

module.exports = movieRouter;
