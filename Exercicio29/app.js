const express = require('express');

const app = express();

const postsRoutes = require('./routes/posts');

const PORT = process.env.PORT || 3000;

// Middleware para trabalhar com JSON
app.use(express.json());

app.use('/posts', postsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});