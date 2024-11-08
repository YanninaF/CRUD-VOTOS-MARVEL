const MarvelModel = require('../models/marvelModel');

// Renderiza la vista principal con todas las películas
exports.index = async (req, res) => {
    const peliculas = await MarvelModel.getAll();
    res.render('index', { peliculas });
};

// Agrega una nueva película
exports.create = async (req, res) => {
    const { pelicula, enlace } = req.body;
    await MarvelModel.create(pelicula, enlace);
    res.redirect('/marvel');
};

// Actualiza una película existente
exports.update = async (req, res) => {
    const { id } = req.params;
    const { pelicula, enlace } = req.body;
    await MarvelModel.update(id, pelicula, enlace);
    res.redirect('/marvel');
};

// Elimina una película
exports.delete = async (req, res) => {
    const { id } = req.params;
    await MarvelModel.delete(id);
    res.redirect('/marvel');
};

// Incrementa el voto de una película
exports.vote = async (req, res) => {
    const { id } = req.params;
    await MarvelModel.vote(id);
    res.redirect('/marvel');
};


// Este archivo usa el modelo MarvelModel para interactuar con la base de datos.
//El controlador maneja la lógica  y coordina las operaciones entre el modelo y la vista. 
//Aquí se define la lógica para obtener la lista de películas y para manejar la votación.