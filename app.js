const express = require('express');
const path = require('path');

const cargoRoutes = require('./routes/cargo.routes');
const empleadoRoutes = require('./routes/empleado.routes');

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'css')));

// Motor de plantillas
app.set('view engine', 'ejs');

// Montar rutas
app.use('/', cargoRoutes);     // rutas de cargos
app.use('/', empleadoRoutes);  // rutas de empleados

// Servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
