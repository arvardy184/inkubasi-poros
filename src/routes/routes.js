const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');
const multer = require('multer');
const storage = require('../config/multer-config');

const upload = multer({storage});

router.get('/books', bookController.getAllBooks);
router.post('/books',upload.single('image'), bookController.createBook);
router.get('/books/:bookId', bookController.getBookById);
router.put('/books/:bookId',upload.single('image'), bookController.updateBookById);
router.delete('/books/:bookId', bookController.deleteBookById);

module.exports = router;
