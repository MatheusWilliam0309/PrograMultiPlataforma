const express = require('express');
const router = express.Router();
const viagemController = require('../controllers/viagemController');

router.get('/', viagemController.getAllViagens);
router.post('/', viagemController.createViagem);
// Rota específica para atualizar o status de uma viagem
router.patch('/:id/status', viagemController.updateViagemStatus);
router.delete('/:id', viagemController.deleteViagem);

module.exports = router;