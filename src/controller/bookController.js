const Book = require('../models/book');


getAllBooks = async (req, res, next) => {
  console.log("HERE");
  try {
    const books = await Book.findAll();
    res.status(200).json({
      status: 'success',
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, publisher, year, pages, current_page, genre, status } = req.body;
    const image = req.file.filename;

    let book = new Book({
      title, 
      author, 
      publisher, 
      year, 
      pages, 
      current_page, 
      genre, 
      status,
      image,
    });

    await book.save();

    res.status(201).json({
      success: true,
      message: "Book has been created successfully",
      data: book,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


getBookById = async (req, res, next) => {

  try {
    const book = await Book.findByPk(req.params.bookId);
    if (!book) {
      return res.status(404).json({
        status: 'fail',
        message: 'Book not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

updateBookById = async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.bookId);
    if (!book) {
      return res.status(404).json({
        status: 'fail',
        message: 'Book not found',
      });
    }

    const { title, author, publisher, year, pages, current_page, genre, status } = req.body;
    const image = req.file.filename;

    await book.update({
      title, 
      author, 
      publisher, 
      year, 
      pages, 
      current_page, 
      genre, 
      status,
      image,
    });

    res.status(200).json({
      status: 'success',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

deleteBookById = async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.bookId);
    if (!book) {
      return res.status(404).json({
        status: 'fail',
        message: 'Book not found',
      });
    }
    await book.destroy();
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
}