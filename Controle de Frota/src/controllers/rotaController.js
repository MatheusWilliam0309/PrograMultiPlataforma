const Rota = require('../models/rotaModel');

exports.getAllRotas = async (req, res) => {
  try {
    const rotas = await Rota.findAll();
    res.status(200).json(rotas);
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor ao buscar rotas.' });
  }
};

exports.createRota = async (req, res) => {
  try {
    const novaRota = await Rota.create(req.body);
    res.status(201).json({ message: 'Rota criada com sucesso!', data: novaRota });
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor ao criar rota.' });
  }
};

exports.updateRota = async (req, res) => {
    try {
        const affectedRows = await Rota.update(req.params.id, req.body);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Rota não encontrada.' });
        }
        res.status(200).json({ message: 'Rota atualizada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor ao atualizar rota.' });
    }
};

exports.deleteRota = async (req, res) => {
    try {
        const affectedRows = await Rota.remove(req.params.id);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Rota não encontrada.' });
        }
        res.status(200).json({ message: 'Rota deletada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor ao deletar rota.' });
    }
};