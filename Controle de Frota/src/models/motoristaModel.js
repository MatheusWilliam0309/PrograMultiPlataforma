const db = require('../config/db');

const Motorista = {
  findAll: async () => {
    const query = 'SELECT * FROM motoristas;';
    const [rows] = await db.query(query);
    return rows;
  },

  findById: async (id) => {
    const query = 'SELECT * FROM motoristas WHERE id = ?;';
    const [rows] = await db.query(query, [id]);
    return rows[0] || null;
  },

  create: async (motoristaData) => {
    const { nome_completo, cnh, telefone } = motoristaData;
    const query = 'INSERT INTO motoristas (nome_completo, cnh, telefone) VALUES (?, ?, ?);';
    const [result] = await db.query(query, [nome_completo, cnh, telefone]);
    return { id: result.insertId, ...motoristaData };
  },

  update: async (id, motoristaData) => {
    const { nome_completo, cnh, telefone } = motoristaData;
    const query = 'UPDATE motoristas SET nome_completo = ?, cnh = ?, telefone = ? WHERE id = ?;';
    const [result] = await db.query(query, [nome_completo, cnh, telefone, id]);
    return result.affectedRows;
  },

  remove: async (id) => {
    const query = 'DELETE FROM motoristas WHERE id = ?;';
    const [result] = await db.query(query, [id]);
    return result.affectedRows;
  }
};

module.exports = Motorista;