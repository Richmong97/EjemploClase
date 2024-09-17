//rutas.js

const express = require('express');

const respuesta = require ('../../red/respuestas'); 
const controlador = require('./controlador');

const router = express.Router();

router.get('/', async function(req, res) {
    try {
        const todos = await controlador.todos();
        respuesta.success(req, res, todos, 200);
    } catch (error) {
        respuesta.error(req, res, 'Error obteniendo datos', 500);
    }
});


module.exports = router;
