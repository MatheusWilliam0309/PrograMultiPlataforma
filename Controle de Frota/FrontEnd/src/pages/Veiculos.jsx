import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import api from '../services/api';

const initialFormState = {
  placa: '',
  modelo: '',
  ano_fabricacao: '',
  capacidade_carga_kg: ''
};

function Veiculos() {
  const [veiculos, setVeiculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados para o modal e formulário
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);

  // Função para buscar os dados
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/veiculos');
      setVeiculos(response.data);
      setError(null);
    } catch (err) {
      setError('Falha ao carregar veículos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Funções para manipular o modal
  const handleCloseModal = () => {
    setShowModal(false);
    setFormData(initialFormState);
    setEditingId(null);
  };

  const handleShowModal = (veiculo = null) => {
    if (veiculo) {
      setFormData(veiculo);
      setEditingId(veiculo.id);
    } else {
      setFormData(initialFormState);
      setEditingId(null);
    }
    setShowModal(true);
  };

  // Função para lidar com a mudança nos inputs do formulário
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função para submeter o formulário (criar ou editar)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'put' : 'post';
    const url = editingId ? `/veiculos/${editingId}` : '/veiculos';

    try {
      await api[method](url, formData);
      handleCloseModal();
      fetchData(); // Recarrega os dados após a operação
    } catch (err) {
      alert(`Erro ao ${editingId ? 'atualizar' : 'criar'} veículo.`);
    }
  };

  // Função para deletar
  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este veículo?')) {
      try {
        await api.delete(`/veiculos/${id}`);
        fetchData(); // Recarrega os dados
      } catch (err) {
        alert('Erro ao deletar veículo. Verifique se ele não está em uso em alguma viagem.');
      }
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestão de Veículos</h1>
        <Button variant="primary" onClick={() => handleShowModal()}>
          Adicionar Veículo
        </Button>
      </div>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Capacidade (kg)</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map(veiculo => (
            <tr key={veiculo.id}>
              <td>{veiculo.placa}</td>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.ano_fabricacao}</td>
              <td>{veiculo.capacidade_carga_kg}</td>
              <td>
                <Button variant="outline-secondary" size="sm" className="me-2" onClick={() => handleShowModal(veiculo)}>
                  Editar
                </Button>
                <Button variant="outline-danger" size="sm" onClick={() => handleDelete(veiculo.id)}>
                  Deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para Adicionar/Editar */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editingId ? 'Editar Veículo' : 'Adicionar Veículo'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Placa</Form.Label>
              <Form.Control type="text" name="placa" value={formData.placa} onChange={handleFormChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Modelo</Form.Label>
              <Form.Control type="text" name="modelo" value={formData.modelo} onChange={handleFormChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ano de Fabricação</Form.Label>
              <Form.Control type="number" name="ano_fabricacao" value={formData.ano_fabricacao} onChange={handleFormChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Capacidade de Carga (kg)</Form.Label>
              <Form.Control type="number" step="0.01" name="capacidade_carga_kg" value={formData.capacidade_carga_kg} onChange={handleFormChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default Veiculos;