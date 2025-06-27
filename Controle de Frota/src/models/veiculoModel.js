// src/models/veiculoModel.js

const db = require('../config/db');

// O Model será um objeto com métodos para cada operação no banco
const Veiculo = {
  // Método para buscar todos os veículos
  findAll: async () => {
    const query = 'SELECT * FROM veiculos;';
    const [rows] = await db.query(query);
    return rows;
  },

  // Método para buscar um veículo pelo ID
  findById: async (id) => {
    const query = 'SELECT * FROM veiculos WHERE id = ?;';
    const [rows] = await db.query(query, [id]);
    // Retorna o primeiro resultado, ou null se não encontrar
    return rows[0] || null;
  },

  // Método para criar um novo veículo
  create: async (veiculoData) => {
    const { placa, modelo, ano_fabricacao, capacidade_carga_kg } = veiculoData;
    const query = 'INSERT INTO veiculos (placa, modelo, ano_fabricacao, capacidade_carga_kg) VALUES (?, ?, ?, ?);';
    // O resultado da inserção contém informações como o ID do novo registro
    const [result] = await db.query(query, [placa, modelo, ano_fabricacao, capacidade_carga_kg]);
    return { id: result.insertId, ...veiculoData };
  },

  // Método para atualizar um veículo
  update: async (id, veiculoData) => {
    const { placa, modelo, ano_fabricacao, capacidade_carga_kg } = veiculoData;
    const query = 'UPDATE veiculos SET placa = ?, modelo = ?, ano_fabricacao = ?, capacidade_carga_kg = ? WHERE id = ?;';
    const [result] = await db.query(query, [placa, modelo, ano_fabricacao, capacidade_carga_kg, id]);
    // Retorna o número de linhas afetadas
    return result.affectedRows;
  },

  // Método para deletar um veículo
  remove: async (id) => {
    const query = 'DELETE FROM veiculos WHERE id = ?;';
    const [result] = await db.query(query, [id]);
    return result.affectedRows;
  }
};

module.exports = Veiculo;