const Livro = require('../models/Livro');

async function listarLivros(req, res) {
  try {
    const livros = await Livro.find().sort({ createdAt: -1 });
    return res.json(livros);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao listar livros.' });
  }
}

async function buscarLivroPorId(req, res) {
  try {
    const livro = await Livro.findById(req.params.id);

    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado.' });
    }

    return res.json(livro);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao buscar livro.' });
  }
}

async function criarLivro(req, res) {
  try {
    const { titulo, autor, genero, anoPublicacao, nota, capa } = req.body;

    const livro = await Livro.create({ titulo, autor, genero, anoPublicacao, nota, capa });
    return res.status(201).json(livro);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ mensagem: 'Erro ao criar livro.', erro: error.message });
  }
}

async function atualizarLivro(req, res) {
  try {
    const { titulo, autor, genero, anoPublicacao, nota, capa } = req.body;

    const livro = await Livro.findByIdAndUpdate(
      req.params.id,
      { titulo, autor, genero, anoPublicacao, nota, capa },
      { new: true, runValidators: true }
    );

    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado.' });
    }

    return res.json(livro);
  } catch (error) {
    return res.status(400).json({ mensagem: 'Erro ao atualizar livro.', erro: error.message });
  }
}

async function deletarLivro(req, res) {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);

    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado.' });
    }

    return res.json({ mensagem: 'Livro removido com sucesso.' });
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao deletar livro.' });
  }
}

module.exports = {
  listarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivro,
  deletarLivro,
};
