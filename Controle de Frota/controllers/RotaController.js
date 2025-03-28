const Rota = require('../models/RotaModel');

exports.getRotas = async (req, res) => {
    const rotas = await Rota.find();
    res.json(rotas);
};

exports.createRota = async (req, res) => {
    const novaRota = new Rota(req.body);
    await novaRota.save();
    res.json(novaRota);
};