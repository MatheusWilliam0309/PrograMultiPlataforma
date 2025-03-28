const express = require('express');
const router = express.Router();
const ViagemController = require('../controllers/ViagemController');

router.get('/', ViagemController.getViagens);
router.post('/', ViagemController.createViagem);

module.exports = router;