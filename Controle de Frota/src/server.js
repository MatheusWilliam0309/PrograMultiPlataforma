require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Importar as rotas
const veiculoRoutes = require('./routes/veiculoRoutes');
const motoristaRoutes = require('./routes/motoristaRoutes');
const rotaRoutes = require('./routes/rotaRoutes');
const viagemRoutes = require('./routes/viagemRoutes');

const app = express();
const PORT = process.env.API_PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('API do Sistema de Frota está funcionando!');
});

// Usar as rotas
app.use('/veiculos', veiculoRoutes);
app.use('/motoristas', motoristaRoutes);
app.use('/rotas', rotaRoutes);
app.use('/viagens', viagemRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});