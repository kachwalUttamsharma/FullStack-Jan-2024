const {
  addTheatre,
  getAllTheatresByOwnerId,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
  addShowToTheatre,
  deleteShow,
  getAllShowsByTheatre,
  getAllTheatresByMovie,
} = require("../controller/theatreController");
const { validateJWTToken } = require("../middleware/authMiddleware");

const theatreRouter = require("express").Router();

theatreRouter.post("/add-theatre", validateJWTToken, addTheatre);
theatreRouter.post(
  "/get-all-theatres-by-owner",
  validateJWTToken,
  getAllTheatresByOwnerId
);
theatreRouter.post("/update-Theatre", validateJWTToken, updateTheatre);
theatreRouter.post("/delete-Theatre", validateJWTToken, deleteTheatre);
theatreRouter.get("/get-all-theatres", validateJWTToken, getAllTheatres);
theatreRouter.post("/add-shows", validateJWTToken, addShowToTheatre);
theatreRouter.post("/delete-show", validateJWTToken, deleteShow);
theatreRouter.post(
  "/get-all-shows-by-theatre",
  validateJWTToken,
  getAllShowsByTheatre
);
theatreRouter.post(
  "/getAllTheatresByMovie",
  validateJWTToken,
  getAllTheatresByMovie
);

///app/v1/users/theatres/getAllTheatresByMovie
module.exports = theatreRouter;
