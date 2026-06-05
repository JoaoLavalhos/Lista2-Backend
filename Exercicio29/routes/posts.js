const express = require('express');

const router = express.Router();

// Array simulando um banco de dados de posts
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


router.get('/', (req, res) => {
  res.json(posts);
});


router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  const post = posts.find(post => post.id === id);

  if (!post) {
    return res.status(404).json({
      erro: 'Post não encontrado.'
    });
  }

  res.json(post);
});


router.post('/', (req, res) => {
  const titulo = req.body.titulo;
  const conteudo = req.body.conteudo;

  const novoPost = {
    id: posts.length + 1,
    titulo: titulo,
    conteudo: conteudo
  };

  posts.push(novoPost);

  res.status(201).json(novoPost);
});


router.put('/:id', (req, res) => {
  const id = Number(req.params.id);

  const post = posts.find(post => post.id === id);

  if (!post) {
    return res.status(404).json({
      erro: 'Post não encontrado.'
    });
  }

  if (req.body.titulo) {
    post.titulo = req.body.titulo;
  }

  if (req.body.conteudo) {
    post.conteudo = req.body.conteudo;
  }

  res.json(post);
});


router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  const index = posts.findIndex(post => post.id === id);

  if (index === -1) {
    return res.status(404).json({
      erro: 'Post não encontrado.'
    });
  }

  posts.splice(index, 1);

  res.status(200).json({
    mensagem: 'Post deletado com sucesso!'
  });
});

module.exports = router;