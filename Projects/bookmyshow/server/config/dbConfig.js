const mongoose = require("mongoose");

mongoose
  .connect(process.env.MongoDBURL)
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((err) => {
    console.log("Failed to Connect with DB", err);
  });
