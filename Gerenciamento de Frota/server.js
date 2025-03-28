require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const VeiculoRoutes = require('./routes/VeiculoRoutes');
const MotoristaRoutes = require('./routes/MotoristaRoutes');
const RotaRoutes = require('./routes/RotaRoutes');
const ViagemRoutes = require('./routes/ViagemRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Conectado"))
.catch(err => console.error(err));

app.use('/veiculos', VeiculoRoutes);
app.use('/motoristas', MotoristaRoutes);
app.use('/rotas', RotaRoutes);
app.use('/viagens', ViagemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));