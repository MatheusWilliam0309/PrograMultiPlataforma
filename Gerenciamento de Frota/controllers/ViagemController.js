const Viagem = require('../models/ViagemModel');

exports.getViagens = async (req, res) => {
    const viagens = await Viagem.find().populate('veiculo motorista rota');
    res.json(viagens);
};

exports.createViagem = async (req, res) => {
    const novaViagem = new Viagem(req.body);
    await novaViagem.save();
    res.json(novaViagem);
};