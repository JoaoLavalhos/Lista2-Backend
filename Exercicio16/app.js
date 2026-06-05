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


app.get('/pesquisa', (req, res) => {
  const termo = req.query.q;

  if (!termo) {
    return res.send('Por favor, forneça um termo para a busca.');
  }

  res.send(`Você pesquisou por: ${termo}`);
});


app.get('/produtos', (req, res) => {
  const categoria = req.query.categoria;
  const precoMax = req.query.precoMax;

  res.send(`Produtos da categoria ${categoria} com preço máximo de R$ ${precoMax}`);
});


app.get('/artigos', (req, res) => {
  const pagina = req.query.pagina || 1;

  res.send(`Exibindo a página ${pagina} dos artigos`);
});

app.use('/users', usersRoutes);

// Middleware 404
app.use((req, res) => {
  res.status(404).send('Página não encontrada.');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});