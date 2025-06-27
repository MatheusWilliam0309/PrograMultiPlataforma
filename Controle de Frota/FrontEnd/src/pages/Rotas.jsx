// src/pages/Rotas.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import api from '../services/api';

const initialFormState = {
  cidade_inicio: '',
  estado_inicio: '',
  cidade_fim: '',
  estado_fim: '',
  distancia_km: ''
};

function Rotas() {
  const [rotas, setRotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/rotas');
      setRotas(response.data);
      setError(null);
    } catch (err) {
      setError('Falha ao carregar rotas.');
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

  const handleShowModal = (rota = null) => {
    setFormData(rota ? rota : initialFormState);
    setEditingId(rota ? rota.id : null);
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'put' : 'post';
    const url = editingId ? `/rotas/${editingId}` : '/rotas';
    try {
      await api[method](url, formData);
      handleCloseModal();
      fetchData();
    } catch (err) {
      alert(`Erro ao ${editingId ? 'atualizar' : 'criar'} rota.`);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar esta rota?')) {
      try {
        await api.delete(`/rotas/${id}`);
        fetchData();
      } catch (err) {
        alert('Erro ao deletar rota. Verifique se ela não está em uso em alguma viagem.');
      }
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestão de Rotas</h1>
        <Button variant="primary" onClick={() => handleShowModal()}>
          Adicionar Rota
        </Button>
      </div>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>Origem</th>
            <th>Destino</th>
            <th>Distância (km)</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {rotas.map(rota => (
            <tr key={rota.id}>
              <td>{rota.cidade_inicio} - {rota.estado_inicio}</td>
              <td>{rota.cidade_fim} - {rota.estado_fim}</td>
              <td>{rota.distancia_km}</td>
              <td>
                <Button variant="outline-secondary" size="sm" className="me-2" onClick={() => handleShowModal(rota)}>
                  Editar
                </Button>
                <Button variant="outline-danger" size="sm" onClick={() => handleDelete(rota.id)}>
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
          <Modal.Title>{editingId ? 'Editar Rota' : 'Adicionar Rota'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col md={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Cidade de Início</Form.Label>
                  <Form.Control type="text" name="cidade_inicio" value={formData.cidade_inicio} onChange={handleFormChange} required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>UF</Form.Label>
                  <Form.Control type="text" name="estado_inicio" value={formData.estado_inicio} onChange={handleFormChange} required maxLength="2" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Cidade de Fim</Form.Label>
                  <Form.Control type="text" name="cidade_fim" value={formData.cidade_fim} onChange={handleFormChange} required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>UF</Form.Label>
                  <Form.Control type="text" name="estado_fim" value={formData.estado_fim} onChange={handleFormChange} required maxLength="2" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Distância (km)</Form.Label>
              <Form.Control type="number" step="0.1" name="distancia_km" value={formData.distancia_km} onChange={handleFormChange} />
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

export default Rotas;