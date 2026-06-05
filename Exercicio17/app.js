const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para receber JSON no corpo da requisição
app.use(express.json());

// Middleware para receber dados de formulário
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Servidor preparado para receber dados no corpo da requisição!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});