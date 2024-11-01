const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clientecontroller');


router.post('/clientes',clienteController.registrarCliente)
router.get('/clientes',clienteController.verclientes)

module.exports = router