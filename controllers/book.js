const dataBaseBooks = require('../database/data')

// {
// "title": "Livro Exemplo",
// "author": "Autor Exemplo",
// "year": 2021,
// "genre": "Ficção"
// } params

const createBook = (req, res) => {
    const { title, author, year, genre } = req.body
    if ( !title || !author || !year || !genre) {
        return res.status(400).json("Require Structure")
    }

    
    
    const newBook = {
        id: dataBaseBooks.idBook++,
        title,
        author,
        year,
        genre,
    }

    dataBaseBooks.book.push(newBook)
    res.status(201).json(newBook)
}

const getBooks = (req, res) => {
    res.json(dataBaseBooks.book);
}

const updateBook = (req, res) => {
    const { id } = req.params
    const { title, author, year, genre } = req.body

    let newId = dataBaseBooks.book.findIndex(d => d.id == id) // findIndex(value => value.id == id) 
    if (newId === -1) return res.status(404).json({error : 'Not Found Book'})
    if ( !title || !author || !year || !genre) return res.status(400).json("Require Structure")
    

    const newBook = {
        id : parseInt(id),
        title,
        author,
        year,
        genre,
    }

    dataBaseBooks.book[newId] = newBook
    res.status(200).json(newBook)
}

const deleteBook = (req, res) => {
    const { id } = req.params
    let newId = dataBaseBooks.book.findIndex(d => d.id == id)
    if (newId === -1) return res.status(404).json({error : 'Not Found Book'})

    dataBaseBooks.book.splice(newId, 1)

    res.status(200).json(`Livro Deletado ID: ${id}`)
}


module.exports = {
    createBook,
    getBooks,
    updateBook,
    deleteBook,
}