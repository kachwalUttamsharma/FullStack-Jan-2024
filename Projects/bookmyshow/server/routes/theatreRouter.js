const {
  addTheatre,
  getAllTheatresByOwnerId,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
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

module.exports = theatreRouter;
