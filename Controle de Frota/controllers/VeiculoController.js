const Veiculo = require('../models/VeiculoModel');

exports.getVeiculos = async (req, res) => {
    const veiculos = await Veiculo.find();
    res.json(veiculos);
};

exports.createVeiculo = async (req, res) => {
    const novoVeiculo = new Veiculo(req.body);
    await novoVeiculo.save();
    res.json(novoVeiculo);
};