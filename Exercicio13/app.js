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


app.get('/calcular/:num1/:num2', (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);

  const soma = num1 + num2;

  res.send(`A soma é: ${soma}`);
});


app.get('/perfil/:id', (req, res) => {
  const id = req.params.id;

  res.send(`<h1>Perfil do usuário com ID: ${id}</h1>`);
});

app.use('/users', usersRoutes);

// Middleware 404
app.use((req, res) => {
  res.status(404).send('Página não encontrada.');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});