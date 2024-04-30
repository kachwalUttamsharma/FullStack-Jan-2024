const express = require("express");
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateById,
  deleteById,
  getAllCoursesAboveRating,
  getByField,
} = require("../controller/courseController");
const courseRouter = express.Router();

courseRouter.get("/getAllCourses", getAllCourses);
courseRouter.get("/getCourse/:id", getCourseById);
courseRouter.post("/createCourse", createCourse);
courseRouter.patch("/updateCourse/:id", updateById);
courseRouter.delete("/deleteCourse/:id", deleteById);
courseRouter.get("/getAllCoursesAboveRating", getAllCoursesAboveRating);
courseRouter.get("/getByField", getByField);

module.exports = courseRouter;
