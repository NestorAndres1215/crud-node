const express = require('express');
const router = express.Router();

// Routers separados
const cargoRoutes = require('./cargo.routes');
const empleadoRoutes = require('./empleado.routes');

// Rutas principales
router.use('/cargo', cargoRoutes);
router.use('/empleado', empleadoRoutes);

// Página principal
router.get('/', (req, res) => res.render('index'));

module.exports = router;
