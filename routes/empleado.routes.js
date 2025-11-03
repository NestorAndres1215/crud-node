const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller');

router.get('/empleado', empleadoController.listarEmpleados);
router.get('/empleadonew', empleadoController.viewCreate);
router.post('/saveempleado', empleadoController.create);
router.get('/empleadoedit/:idemp', empleadoController.viewEdit);
router.post('/updateempleado', empleadoController.update);
router.get('/empleadodelete/:idemp', empleadoController.delete);

module.exports = router;
