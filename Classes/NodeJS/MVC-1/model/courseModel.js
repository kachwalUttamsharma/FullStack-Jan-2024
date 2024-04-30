const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  instructor: String,
  durationInMins: Number,
  ratings: Number,
  publibshedDate: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const CourseModel = mongoose.model("courses", courseSchema);

module.exports = CourseModel;
