const express = require('express');
const app = express();
const port = 3000


app.get('/', (req, res) => {
    res.status(200).send("Servidor Ligado Porta: "+ port)
})

app.listen(port, () => {
    console.log(`Servidor Rodando na Porta: ${port}`);
    
})