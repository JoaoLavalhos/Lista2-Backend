const express = require('express');

const app = express();

const usersRoutes = require('./routes/users');

const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta public
app.use(express.static('public'));

// Esta rota foi removida porque agora o "/" será o index.html da pasta public
// app.get('/', (req, res) => {
//   res.send('Olá, Express!');
// });

app.get('/bem-vindo', (req, res) => {
  res.send('<h1>Seja bem-vindo ao meu servidor!</h1>');
});

app.get('/info', (req, res) => {
  res.json({
    versao: '1.0.0',
    autor: 'Seu Nome'
  });
});

app.use('/users', usersRoutes);

// Middleware 404
app.use((req, res) => {
  res.status(404).send('Página não encontrada.');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});