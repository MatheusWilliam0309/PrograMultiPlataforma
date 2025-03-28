const Motorista = require('../models/MotoristaModel');

exports.getMotoristas = async (req, res) => {
    const motoristas = await Motorista.find();
    res.json(motoristas);
};

exports.createMotorista = async (req, res) => {
    const novoMotorista = new Motorista(req.body);
    await novoMotorista.save();
    res.json(novoMotorista);
};