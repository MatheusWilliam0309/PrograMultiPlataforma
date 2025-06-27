const db = require('../config/db');

const Rota = {
  findAll: async () => {
    const query = 'SELECT * FROM rotas;';
    const [rows] = await db.query(query);
    return rows;
  },

  findById: async (id) => {
    const query = 'SELECT * FROM rotas WHERE id = ?;';
    const [rows] = await db.query(query, [id]);
    return rows[0] || null;
  },

  create: async (rotaData) => {
    const { cidade_inicio, estado_inicio, cidade_fim, estado_fim, distancia_km } = rotaData;
    const query = 'INSERT INTO rotas (cidade_inicio, estado_inicio, cidade_fim, estado_fim, distancia_km) VALUES (?, ?, ?, ?, ?);';
    const [result] = await db.query(query, [cidade_inicio, estado_inicio, cidade_fim, estado_fim, distancia_km]);
    return { id: result.insertId, ...rotaData };
  },

  update: async (id, rotaData) => {
    const { cidade_inicio, estado_inicio, cidade_fim, estado_fim, distancia_km } = rotaData;
    const query = 'UPDATE rotas SET cidade_inicio = ?, estado_inicio = ?, cidade_fim = ?, estado_fim = ?, distancia_km = ? WHERE id = ?;';
    const [result] = await db.query(query, [cidade_inicio, estado_inicio, cidade_fim, estado_fim, distancia_km, id]);
    return result.affectedRows;
  },

  remove: async (id) => {
    const query = 'DELETE FROM rotas WHERE id = ?;';
    const [result] = await db.query(query, [id]);
    return result.affectedRows;
  }
};

module.exports = Rota;