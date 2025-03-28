const mongoose = require('mongoose');

const Viagem = new mongoose.Schema({
    veiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Veiculo', required: true },
    motorista: { type: mongoose.Schema.Types.ObjectId, ref: 'Motorista', required: true },
    rota: { type: mongoose.Schema.Types.ObjectId, ref: 'Rota', required: true },
    data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Viagem', Viagem);