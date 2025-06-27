const db = require('../config/db');

const Viagem = {
  // A busca geral já traz os dados relacionados para facilitar a exibição
  findAll: async () => {
    const query = `
        SELECT 
            vg.id, vg.data_viagem, vg.status,
            ve.placa as veiculo_placa, ve.modelo as veiculo_modelo,
            mo.nome_completo as motorista_nome,
            ro.cidade_inicio, ro.cidade_fim, ro.distancia_km
        FROM viagens vg
        JOIN veiculos ve ON vg.id_veiculo = ve.id
        JOIN motoristas mo ON vg.id_motorista = mo.id
        JOIN rotas ro ON vg.id_rota = ro.id
        ORDER BY vg.data_viagem DESC;
    `;
    const [rows] = await db.query(query);
    return rows;
  },

  create: async (viagemData) => {
    const { data_viagem, id_veiculo, id_motorista, id_rota, status } = viagemData;
    const query = 'INSERT INTO viagens (data_viagem, id_veiculo, id_motorista, id_rota, status) VALUES (?, ?, ?, ?, ?);';
    const [result] = await db.query(query, [data_viagem, id_veiculo, id_motorista, id_rota, status || 'Agendada']);
    return { id: result.insertId, ...viagemData };
  },

  // Uma função de update focada em mudar o status, que é um caso de uso comum
  updateStatus: async (id, status) => {
    const query = 'UPDATE viagens SET status = ? WHERE id = ?;';
    const [result] = await db.query(query, [status, id]);
    return result.affectedRows;
  },

  remove: async (id) => {
    const query = 'DELETE FROM viagens WHERE id = ?;';
    const [result] = await db.query(query, [id]);
    return result.affectedRows;
  }
};

module.exports = Viagem;