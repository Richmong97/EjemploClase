const mysql = require('mysql2');
const config = require('../../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let conexion;

function conmysql() {
    if (!conexion) {
        conexion = mysql.createConnection(dbconfig);

        conexion.connect((err) => {
            if (err) {
                console.error('Error conectando a la base de datos:', err);
                setTimeout(conmysql, 2000);  // esto lo que hace es que da 2 segundos de espera para conecatar
            } else {
                console.log('Conectado a la base de datos MySQL');
            }
        });

        conexion.on('error', (err) => {
            console.error('Error en la conexión a MySQL:', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                conmysql();  // Reconectar automáticamente en caso de pérdida de conexión
            } else {
                throw err;
            }
        });
    }
}

conmysql();

function todos(tabla) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

module.exports = {
    todos,
};
