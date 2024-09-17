//controlador.js

const db = require('../../BD/mysql');

const TABLA = 'clientes';

async function todos() {
    try {
        const resultados = await db.todos(TABLA);
        return resultados;
    } catch (error) {
        throw new Error('Error obteniendo los clientes');
    }
}

 
module.exports = {
    todos,
}