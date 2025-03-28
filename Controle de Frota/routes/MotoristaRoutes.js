const express = require('express');
const router = express.Router();
const MotoristaController = require('../controllers/MotoristaController');

router.get('/', MotoristaController.getMotoristas);
router.post('/', MotoristaController.createMotorista);

module.exports = router;
