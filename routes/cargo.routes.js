const express = require('express');
const router = express.Router();
const cargoController = require('../controllers/cargo.controller');

// --------------------
// RUTAS DE CARGO
// --------------------

// Listar todos los cargos
router.get('/cargo', cargoController.list);

// Mostrar formulario de creación
router.get('/cargonew', cargoController.viewCreate);

// Guardar nuevo cargo
router.post('/savecargo', cargoController.create);

// Mostrar formulario de edición por ID
router.get('/cargoedit/:id', cargoController.viewEdit);

// Actualizar cargo
router.post('/updatecargo', cargoController.update);

// Eliminar cargo por ID
router.get('/cargodelete/:id', cargoController.delete);

module.exports = router;
