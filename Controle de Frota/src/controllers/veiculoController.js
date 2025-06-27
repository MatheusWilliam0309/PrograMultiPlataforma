const Veiculo = require('../models/veiculoModel');

// Listar todos os veículos
exports.getAllVeiculos = async (req, res) => {
  try {
    // A lógica SQL está agora no Model
    const veiculos = await Veiculo.findAll();
    res.status(200).json(veiculos);
  } catch (error) {
    console.error('ERRO DETALHADO:', error);
    res.status(500).json({ error: 'Erro no servidor ao buscar veículos.' });
  }
};

// Criar um novo veículo
exports.createVeiculo = async (req, res) => {
  try {
    const novoVeiculo = await Veiculo.create(req.body);
    res.status(201).json({ message: 'Veículo criado com sucesso!', data: novoVeiculo });
  } catch (error) {
    // Tratamento de erro, por exemplo, placa duplicada
    if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'A placa informada já está cadastrada.' });
    }
    res.status(500).json({ error: 'Erro no servidor ao criar veículo.' });
  }
};

// Atualizar um veículo
exports.updateVeiculo = async (req, res) => {
    try {
        const affectedRows = await Veiculo.update(req.params.id, req.body);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Veículo não encontrado.' });
        }
        res.status(200).json({ message: 'Veículo atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor ao atualizar veículo.' });
    }
};

// Deletar um veículo
exports.deleteVeiculo = async (req, res) => {
    try {
        const affectedRows = await Veiculo.remove(req.params.id);
        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Veículo não encontrado.' });
        }
        res.status(200).json({ message: 'Veículo deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor ao deletar veículo.' });
    }
};