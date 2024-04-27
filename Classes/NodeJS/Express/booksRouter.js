const express = require("express");
const bookRouter = express.Router();

// middleware
bookRouter.use();

bookRouter.get("/", () => {
  // logic for get books;
});

bookRouter.post("/addNewBook", () => {
  // logic to add new book;
});

bookRouter.get("/getBook/:id", () => {
  // logic to book by bookid;
});

bookRouter.put("/updateBook/:id", () => {
  // update book by bookid
});

bookRouter.delete("/deleteBook/:id", () => {
  // delete id
});

module.exports = bookRouter;
