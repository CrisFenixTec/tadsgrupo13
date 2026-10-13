// JavaScript

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Gabarito
const gabarito = {
    resp1: "Grifinória",
    resp2: "Sirius Black"
};

app.post('/avaliar', (req, res) => {
    const { resp1, resp2 } = req.body;
    let pontuacao = 0;

    if (resp1 === gabarito.resp1) pontuacao++;
    if (resp2 === gabarito.resp2) pontuacao++;

    res.json({ pontuacao });
});

app.listen(3000, () => {
    console.log('Backend rodando na porta 3000');
});
