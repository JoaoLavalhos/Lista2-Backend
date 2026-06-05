const http = require('http');

const servidor = http.createServer((req, res) => {
  res.end('Ola, Mundo!');
});

const PORT = process.env.PORT || 3000;

servidor.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});