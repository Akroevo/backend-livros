const express = require('express');
const livroController = require('../controllers/livroController');

const router = express.Router();

router.get('/livros', livroController.listarLivros);
router.get('/livros/:id', livroController.buscarLivroPorId);
router.post('/livros', livroController.criarLivro);
router.put('/livros/:id', livroController.atualizarLivro);
router.delete('/livros/:id', livroController.deletarLivro);

module.exports = router;
