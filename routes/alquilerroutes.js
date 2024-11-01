const express = require('express');
const router = express.Router();
const alquilerController = require('../controller/alquilercontroller');

router.post('/alquileres',alquilerController.realizarAlquiler)
router.get('/alquileres/historial',alquilerController.historial)

module.exports = router