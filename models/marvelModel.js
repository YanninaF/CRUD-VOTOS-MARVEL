const pool = require('../db');

class MarvelModel {
    static async getAll() {
        const query = 'SELECT * FROM marvelstudios ORDER BY votos DESC';
        const result = await pool.query(query);
        return result.rows;
    }

    static async create(pelicula, enlace) {
        const query = 'INSERT INTO marvelstudios (pelicula, enlace) VALUES ($1, $2) RETURNING *';
        const values = [pelicula, enlace];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async update(id, pelicula, enlace) {
        const query = 'UPDATE marvelstudios SET pelicula = $1, enlace = $2 WHERE id_marvel = $3 RETURNING *';
        const values = [pelicula, enlace, id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async delete(id) {
        const query = 'DELETE FROM marvelstudios WHERE id_marvel = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rowCount > 0;
    }

    static async vote(id) {
        const query = 'UPDATE marvelstudios SET votos = votos + 1 WHERE id_marvel = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }
}

module.exports = MarvelModel;


// contiene las funciones necesarias para realizar operaciones CRUD y gestionar los votos en la tabla 
//El modelo se encarga de interactuar con la base de datos.
