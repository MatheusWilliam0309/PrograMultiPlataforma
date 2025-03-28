const mongoose = require('mongoose');

const Motorista = new mongoose.Schema({
    nome: { type: String, required: true },
    cnh: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Motorista', Motorista);