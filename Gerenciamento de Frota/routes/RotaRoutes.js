const express = require('express');
const router = express.Router();
const RotaController = require('../controllers/RotaController');

router.get('/', RotaController.getRotas);
router.post('/', RotaController.createRota);

module.exports = router;