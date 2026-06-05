const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para receber JSON no req.body
app.use(express.json());

// Array simulando banco de dados
const playlists = [];

// POST /playlists - Criar nova playlist
app.post('/playlists', (req, res) => {
  const nome = req.body.nome;

  if (!nome) {
    return res.status(400).json({
      erro: 'O campo nome é obrigatório.'
    });
  }

  const novaPlaylist = {
    id: playlists.length + 1,
    nome: nome,
    musicas: []
  };

  playlists.push(novaPlaylist);

  res.status(201).json(novaPlaylist);
});

// GET /playlists - Listar todas as playlists
app.get('/playlists', (req, res) => {
  res.json(playlists);
});

// POST /playlists/:id/musicas - Adicionar música em uma playlist
app.post('/playlists/:id/musicas', (req, res) => {
  const id = Number(req.params.id);
  const titulo = req.body.titulo;
  const artista = req.body.artista;

  const playlist = playlists.find(playlist => playlist.id === id);

  if (!playlist) {
    return res.status(404).json({
      erro: 'Playlist não encontrada.'
    });
  }

  if (!titulo || !artista) {
    return res.status(400).json({
      erro: 'Os campos titulo e artista são obrigatórios.'
    });
  }

  const novaMusica = {
    titulo: titulo,
    artista: artista
  };

  playlist.musicas.push(novaMusica);

  res.status(201).json(novaMusica);
});

// GET /playlists/:id/musicas - Listar músicas de uma playlist
app.get('/playlists/:id/musicas', (req, res) => {
  const id = Number(req.params.id);

  const playlist = playlists.find(playlist => playlist.id === id);

  if (!playlist) {
    return res.status(404).json({
      erro: 'Playlist não encontrada.'
    });
  }

  res.json(playlist.musicas);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});