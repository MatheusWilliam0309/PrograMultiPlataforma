const express = require('express');
const router = express.Router();
const rotaController = require('../controllers/rotaController');

router.get('/', rotaController.getAllRotas);
router.post('/', rotaController.createRota);
router.put('/:id', rotaController.updateRota);
router.delete('/:id', rotaController.deleteRota);

module.exports = router;