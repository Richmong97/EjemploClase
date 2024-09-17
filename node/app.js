const express = require('express');
const config = require('./config');
const clientes = require('./src/modulos/clientes/rutas'); 

const app = express();

// Configuración del puerto
app.set('port', config.app.port);

// Rutas
app.use('/api/clientes', clientes);

module.exports = app;
