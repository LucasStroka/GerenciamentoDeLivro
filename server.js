const express = require('express');
const app = express();
const port = 3000
const book = require('./routes/bookRoute')

// Para Aceitar JSON
app.use(express.json());

// destinar rotas
app.use('/book', book);

// rota teste
app.get('/', (req, res) => {
    res.status(200).send("Servidor Ligado Porta: "+ port)
})// http://localhost:3000/


// iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor Rodando na Porta: ${port}`);
})