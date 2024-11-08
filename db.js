const {Pool} = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'marvel_db',
    password: '12345',
    port: 5433
});

module.exports = pool;


//Este archivo configura la conexión a la base de datos usando pg para conectarse a PostgreSQL.