import React, { useState, useEffect } from 'react';
import api from '../services/api.js'; // Nosso conector da API

function Dashboard() {
  // Estados do componente
  const [viagens, setViagens] = useState([]); // Array para guardar as viagens
  const [loading, setLoading] = useState(true); // Indicador de carregamento
  const [error, setError] = useState(null); // Para guardar mensagens de erro

  // useEffect é executado quando o componente é montado na tela
  useEffect(() => {
    // Função para buscar os dados das viagens
    async function fetchViagens() {
      try {
        setLoading(true); // Inicia o carregamento
        // Faz a chamada GET para o endpoint /viagens da nossa API
        const response = await api.get('/viagens');
        setViagens(response.data); // Atualiza o estado com os dados recebidos
        setError(null); // Limpa qualquer erro anterior
      } catch (err) {
        // Se der erro na chamada, guarda a mensagem de erro
        setError('Falha ao buscar os dados das viagens. A API está rodando?');
        console.error(err);
      } finally {
        // Independente de sucesso ou falha, termina o carregamento
        setLoading(false);
      }
    }

    fetchViagens(); // Chama a função
  }, []); // O array vazio [] significa que este efeito roda apenas uma vez

  // Renderização condicional
  if (loading) {
    return <div className="d-flex justify-content-center mt-5"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  // Função para dar cor ao status
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Concluída':
        return <span className="badge bg-success">{status}</span>;
      case 'Em Andamento':
        return <span className="badge bg-warning text-dark">{status}</span>;
      case 'Agendada':
        return <span className="badge bg-info text-dark">{status}</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  }

  return (
    <div>
      <h1 className="mb-4">Dashboard de Viagens</h1>

      {viagens.length === 0 ? (
        <p>Nenhuma viagem registrada ainda.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Status</th>
                <th>Data</th>
                <th>Veículo</th>
                <th>Motorista</th>
                <th>Rota</th>
              </tr>
            </thead>
            <tbody>
              {viagens.map((viagem) => (
                <tr key={viagem.id}>
                  <td>{getStatusBadge(viagem.status)}</td>
                  <td>{new Date(viagem.data_viagem).toLocaleString('pt-BR')}</td>
                  <td>{viagem.veiculo_modelo} ({viagem.veiculo_placa})</td>
                  <td>{viagem.motorista_nome}</td>
                  <td>{viagem.cidade_inicio} → {viagem.cidade_fim}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Dashboard;