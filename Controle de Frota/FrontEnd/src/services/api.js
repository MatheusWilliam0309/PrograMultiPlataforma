import axios from 'axios';

const api = axios.create({
  // O endereço base da sua API backend
  baseURL: 'http://localhost:3000/'
});

export default api;