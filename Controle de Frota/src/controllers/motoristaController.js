const Motorista = require('../models/motoristaModel');

exports.getAllMotoristas = async (req, res) => {
  try {
    const motoristas = await Motorista.findAll();
    res.status(200).json(motoristas);
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor ao buscar motoristas.' });
  }
};

exports.createMotorista = async (req, res) => {
  try {
    const novoMotorista = await Motorista.create(req.body);
    res.status(201).json({ message: 'Motorista criado com sucesso!', data: novoMotorista });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'A CNH informada já está cadastrada.' });
    }
    res.status(500).json({ error: 'Erro no servidor ao criar motorista.' });
  }
};

exports.updateMotorista = async (req, res) => {
    try {
        const affectedRows = await Motorista.update(req.params.id, req.body);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Motorista não encontrado.' });
        }
        res.status(200).json({ message: 'Motorista atualizado com sucesso!' });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'A CNH informada já pertence a outro motorista.' });
        }
        res.status(500).json({ error: 'Erro no servidor ao atualizar motorista.' });
    }
};

exports.deleteMotorista = async (req, res) => {
    try {
        const affectedRows = await Motorista.remove(req.params.id);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Motorista não encontrado.' });
        }
        res.status(200).json({ message: 'Motorista deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor ao deletar motorista.' });
    }
};