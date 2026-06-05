const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para trabalhar com JSON
app.use(express.json());


const livros = [
  {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    ano: 1899
  },
  {
    id: 2,
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    ano: 1943
  },
  {
    id: 3,
    titulo: 'Aprendendo Node.js',
    autor: 'Luis Silva',
    ano: 2020
  },
  {
    id: 4,
    titulo: 'Express na Prática',
    autor: 'Maria Souza',
    ano: 2020
  },
  {
    id: 5,
    titulo: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    ano: 1881
  }
];


app.get('/livros', (req, res) => {
  const ano = req.query.ano;

  if (ano) {
    const livrosFiltrados = livros.filter(livro => livro.ano === Number(ano));
    return res.json(livrosFiltrados);
  }

  res.json(livros);
});


app.get('/livros/autor/:nomeDoAutor', (req, res) => {
  const nomeDoAutor = req.params.nomeDoAutor;

  const livrosDoAutor = livros.filter(livro =>
    livro.autor.toLowerCase() === nomeDoAutor.toLowerCase()
  );

  res.json(livrosDoAutor);
});


app.post('/livros', (req, res) => {
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const ano = req.body.ano;

  if (!titulo || !autor) {
    return res.status(400).json({
      erro: 'Os campos titulo e autor são obrigatórios.'
    });
  }

  const novoLivro = {
    id: livros.length + 1,
    titulo: titulo,
    autor: autor,
    ano: ano
  };

  livros.push(novoLivro);

  res.status(201).json(novoLivro);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});