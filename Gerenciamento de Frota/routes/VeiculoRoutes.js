const express = require('express');
const router = express.Router();
const VeiculoController = require('../controllers/VeiculoController');

router.get('/', VeiculoController.getVeiculos);
router.post('/', VeiculoController.createVeiculo);

module.exports = router;
