// controller
const CourseModel = require("../model/courseModel");

const createCourse = async (req, res) => {
  try {
    const course = new CourseModel({
      name: req?.body?.name,
      instructor: req?.body?.instructor,
      publishedDate: req?.body?.publishedDate,
      isPublished: req?.body?.isPublished,
      ratings: req?.body?.rating,
      durationInMins: req?.body?.durationInMins,
    });
    const dataToSave = await course.save();
    res
      .status(200)
      .json({ message: "course entry is saved in db", course: dataToSave });
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const data = await CourseModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const data = await CourseModel.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
};

// to be completed in next class
const getByField = async (req, res) => {
  try {
    const key = req.body?.field;
    const data = await CourseModel.find({ key: key });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
};

const getAllCoursesAboveRating = async (req, res) => {
  try {
    // gte, lte, ls, gt
    const data = await CourseModel.find({ ratings: { $gte: req.body.rating } });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
};

const updateById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const data = await CourseModel.findOneAndUpdate(
      { _id: id },
      updatedData,
      options
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await CourseModel.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllCourses,
  getByField,
  getCourseById,
  getAllCoursesAboveRating,
  createCourse,
  updateById,
  deleteById,
};
