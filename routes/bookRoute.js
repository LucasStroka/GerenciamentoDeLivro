const express = require('express')
const router = express.Router();
const bookController = require('../controllers/book')


// http://localhost:3000/book/
// Route para Criar livros
router.post('/', bookController.createBook)

// http://localhost:3000/book/
// Route para Listar Livros
router.get('/', bookController.getBooks)

// http://localhost:3000/book/:id
// Route para Update Livros
router.put('/:id', bookController.updateBook)

// http://localhost:3000/book/:id
// Route para Deletar Livros
router.delete('/:id', bookController.deleteBook)

module.exports = router;
