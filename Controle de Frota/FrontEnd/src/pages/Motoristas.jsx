// src/pages/Motoristas.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import api from '../services/api';

const initialFormState = {
  nome_completo: '',
  cnh: '',
  telefone: ''
};

function Motoristas() {
  const [motoristas, setMotoristas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/motoristas');
      setMotoristas(response.data);
      setError(null);
    } catch (err) {
      setError('Falha ao carregar motoristas.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData(initialFormState);
    setEditingId(null);
  };

  const handleShowModal = (motorista = null) => {
    setFormData(motorista ? motorista : initialFormState);
    setEditingId(motorista ? motorista.id : null);
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'put' : 'post';
    const url = editingId ? `/motoristas/${editingId}` : '/motoristas';
    try {
      await api[method](url, formData);
      handleCloseModal();
      fetchData();
    } catch (err) {
      alert(`Erro ao ${editingId ? 'atualizar' : 'criar'} motorista.`);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este motorista?')) {
      try {
        await api.delete(`/motoristas/${id}`);
        fetchData();
      } catch (err) {
        alert('Erro ao deletar motorista. Verifique se ele não está em uso em alguma viagem.');
      }
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestão de Motoristas</h1>
        <Button variant="primary" onClick={() => handleShowModal()}>
          Adicionar Motorista
        </Button>
      </div>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>Nome Completo</th>
            <th>CNH</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {motoristas.map(motorista => (
            <tr key={motorista.id}>
              <td>{motorista.nome_completo}</td>
              <td>{motorista.cnh}</td>
              <td>{motorista.telefone}</td>
              <td>
                <Button variant="outline-secondary" size="sm" className="me-2" onClick={() => handleShowModal(motorista)}>
                  Editar
                </Button>
                <Button variant="outline-danger" size="sm" onClick={() => handleDelete(motorista.id)}>
                  Deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editingId ? 'Editar Motorista' : 'Adicionar Motorista'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" name="nome_completo" value={formData.nome_completo} onChange={handleFormChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CNH</Form.Label>
              <Form.Control type="text" name="cnh" value={formData.cnh} onChange={handleFormChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" name="telefone" value={formData.telefone} onChange={handleFormChange} />
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

export default Motoristas;