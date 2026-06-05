const express = require('express');

const app = express();

const usersRoutes = require('./routes/users');

const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/bem-vindo', (req, res) => {
  res.send('<h1>Seja bem-vindo ao meu servidor!</h1>');
});

app.get('/info', (req, res) => {
  res.json({
    versao: '1.0.0',
    autor: 'Seu Nome'
  });
});


app.get('/saudacao/:nome', (req, res) => {
  const nome = req.params.nome;

  res.send(`Olá, ${nome}!`);
});

app.use('/users', usersRoutes);

// Middleware 404
app.use((req, res) => {
  res.status(404).send('Página não encontrada.');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});