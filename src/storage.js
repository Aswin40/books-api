const fs = require("fs");
const path = require("path");

const addBook = (book) => {
  const books = getAllBooks();
  books.push(book);
  fs.writeFileSync("src/books.json", JSON.stringify(books));
};

const isBookPresent = (title) => {
  const books = getAllBooks();
  return books.some((book) => book.title === title);
};

const getAllBooks = () => {
  return JSON.parse(fs.readFileSync("src/books.json").toString());
};

module.exports = { addBook, isBookPresent, getAllBooks };
