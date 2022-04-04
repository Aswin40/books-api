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

const getBookById = (id) => {
  return getAllBooks().find((book) => book.id === id);
};

const updateBook = (bookDetails) => {
  const books = getAllBooks();
  const newBooks = books.map((book) => {
    if (book.id === bookDetails.id) {
      return { ...book, title: bookDetails.title, author: bookDetails.author };
    }
    return book;
  });
  fs.writeFileSync("src/books.json", JSON.stringify(newBooks));
};

const getAllBooks = () => {
  return JSON.parse(fs.readFileSync("src/books.json").toString());
};

module.exports = {
  addBook,
  isBookPresent,
  getAllBooks,
  getBookById,
  updateBook,
};
