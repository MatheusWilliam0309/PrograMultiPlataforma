const Viagem = require('../models/viagemModel');

exports.getAllViagens = async (req, res) => {
  try {
    const viagens = await Viagem.findAll();
    res.status(200).json(viagens);
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor ao buscar viagens.' });
  }
};

exports.createViagem = async (req, res) => {
  try {
    const novaViagem = await Viagem.create(req.body);
    res.status(201).json({ message: 'Viagem registrada com sucesso!', data: novaViagem });
  } catch (error) {
    // Erro específico para chaves estrangeiras inválidas
    if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        return res.status(400).json({ error: 'ID de veículo, motorista ou rota inválido. Verifique se os registros existem.' });
    }
    res.status(500).json({ error: 'Erro no servidor ao registrar viagem.' });
  }
};

exports.updateViagemStatus = async (req, res) => {
    const { status } = req.body;
    if (!status) {
        return res.status(400).json({ error: 'O campo "status" é obrigatório.' });
    }
    try {
        const affectedRows = await Viagem.updateStatus(req.params.id, status);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Viagem não encontrada.' });
        }
        res.status(200).json({ message: `Status da viagem atualizado para "${status}" com sucesso!` });
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor ao atualizar status da viagem.' });
    }
};

exports.deleteViagem = async (req, res) => {
    try {
        const affectedRows = await Viagem.remove(req.params.id);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Viagem não encontrada.' });
        }
        res.status(200).json({ message: 'Viagem deletada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor ao deletar viagem.' });
    }
};