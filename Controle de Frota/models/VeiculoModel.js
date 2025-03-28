const mongoose = require('mongoose');

const Veiculo = new mongoose.Schema({
    placa: { type: String, required: true, unique: true },
    modelo: { type: String, required: true },
    ano: { type: Number, required: true }
});

module.exports = mongoose.model('Veiculo', Veiculo);