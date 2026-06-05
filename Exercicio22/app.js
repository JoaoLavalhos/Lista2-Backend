const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para trabalhar com JSON
app.use(express.json());


const posts = [
  {
    id: 1,
    titulo: 'Meu primeiro post',
    conteudo: 'Este é o conteúdo do primeiro post.'
  },
  {
    id: 2,
    titulo: 'Aprendendo Express',
    conteudo: 'Neste post estamos aprendendo a criar rotas com Express.'
  },
  {
    id: 3,
    titulo: 'Mini API de Blog',
    conteudo: 'Este post faz parte da nossa mini API de blog.'
  }
];


app.get('/posts', (req, res) => {
  res.json(posts);
});


app.get('/posts/:id', (req, res) => {
  const id = Number(req.params.id);

  const post = posts.find(post => post.id === id);

  if (!post) {
    return res.status(404).json({
      erro: 'Post não encontrado.'
    });
  }

  res.json(post);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});