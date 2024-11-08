const express = require('express');
const path = require('path'); //proporciona utilidades para trabajar con rutas de archivos y directorios
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const marvelController = require('./controllers/marvelController');

const app = express();

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public'))); // Middleware para archivos estáticos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Rutas   importa el controlador y configura las rutas para cada operación (CRUD y votación).
app.get('/marvel', marvelController.index);
app.post('/marvel', marvelController.create);
app.post('/marvel/:id/vote', marvelController.vote);
app.put('/marvel/:id', marvelController.update);
app.delete('/marvel/:id', marvelController.delete);

// Configuración del puerto y escucha
const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});



//Este archivo configura el servidor Express, define el motor de plantillas, y configura las rutas y el middleware.