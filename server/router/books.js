const express = require('express')
const booksController = require('../controllers/books')
const router = express.Router()


router.get('/', booksController.getAllBooks)

router.get('/:id', booksController.getBookById)

router.post('/', booksController.addBook)

router.put('/:id', booksController.updateBookById)

router.delete('/:name', booksController.deleteBookByName)

module.exports = router