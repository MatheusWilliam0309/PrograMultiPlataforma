const mongoose = require('mongoose');

const Rota = new mongoose.Schema({
    origem: { type: String, required: true },
    destino: { type: String, required: true }
});

module.exports = mongoose.model('Rota', Rota);