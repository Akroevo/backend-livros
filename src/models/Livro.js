const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
    },
    autor: {
      type: String,
      required: true,
      trim: true,
    },
    genero: {
      type: String,
      required: true,
      trim: true,
    },
    anoPublicacao: {
      type: Number,
      required: true,
    },
    nota: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    capa: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Livro', LivroSchema);
