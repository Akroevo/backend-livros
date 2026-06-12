require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');
const livroRoutes = require('./routes/livroRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/', (req, res) => {
  res.json({ mensagem: 'API de Livros funcionando!' });
});

app.use('/api', livroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
