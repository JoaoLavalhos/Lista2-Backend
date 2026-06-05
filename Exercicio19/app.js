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


app.get('/contato', (req, res) => {
  res.send(`
    <h1>Formulário de Contato</h1>

    <form action="/enviar-contato" method="POST">
      <label>Assunto:</label><br>
      <input type="text" name="assunto"><br><br>

      <label>Mensagem:</label><br>
      <textarea name="mensagem"></textarea><br><br>

      <button type="submit">Enviar</button>
    </form>
  `);
});


app.post('/enviar-contato', (req, res) => {
  const assunto = req.body.assunto;
  const mensagem = req.body.mensagem;

  res.send('<h1>Contato recebido!</h1>');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});