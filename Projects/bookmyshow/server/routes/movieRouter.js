const { AddMovie } = require("../controller/movieController");
const movieRouter = require("express").Router();

movieRouter.post("/add-movie", AddMovie);

module.exports = movieRouter;
