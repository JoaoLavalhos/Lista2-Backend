const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares para receber dados no corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Servidor preparado para receber dados no corpo da requisição!');
});


app.post('/cadastro', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;

  res.json({
    mensagem: 'Cadastro realizado com sucesso!',
    dados: {
      nome: nome,
      email: email
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});