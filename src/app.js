const express = require("express");
const { addBook, isBookPresent, getAllBooks } = require("./storage");

const app = express();

const hostname = "127.0.0.1";

const port = 3000;

app.use(express.json());

app.post("/books", (req, res) => {
  const bookDetails = req.body;

  if (!isBookPresent(bookDetails.title)) {
    addBook(bookDetails);
    res.send("Book details successfully added");
  } else {
    res
      .status(400)
      .send({ status: 400, message: "Book with same title already exists" });
  }
});

app.get("/books", (req, res) => {
  res.send(getAllBooks());
});

app.listen(port, hostname, () => {
  console.log(`Server started on port http://${hostname}:${port}`);
});
