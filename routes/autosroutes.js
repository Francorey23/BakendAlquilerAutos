const express = require('express');
const router = express.Router();

const autoController = require('../controller/autoscontroller');

router.get('/autos',autoController.autosDisponibles)
router.post('/autos',autoController.registrarAuto)

module.exports = router