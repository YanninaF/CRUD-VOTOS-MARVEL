# Sistema de Votación de Películas Marvel 🎬🦸‍♂️

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de votos en una lista de películas del universo Marvel. Permite a los usuarios agregar películas, votar por ellas, y actualizar o eliminar las entradas existentes a través de una interfaz web atractiva y fácil de usar.

## Características 🌟

- **CRUD Completo**: Posibilidad de crear, leer, actualizar y eliminar registros de películas y sus votos.
- **Votación en tiempo real**: Al hacer clic en "Votar", la información se actualiza en la base de datos sin necesidad de recargar la página.
- **Interfaz visual atractiva**: Diseñada para ofrecer una experiencia de usuario amigable, con fondos temáticos y pequeños iconos de superhéroes de Marvel para dar vida a la aplicación.
- **Modularidad**: Proyecto organizado en módulos, con carpetas separadas para controladores, modelos, vistas, y archivos públicos, lo que facilita su mantenimiento.

## Tecnologías Utilizadas 🛠️

- **Node.js**: Entorno de ejecución para JavaScript que permite construir aplicaciones del lado del servidor.
- **Express**: Framework minimalista que facilita la creación de la API de backend.
- **EJS (Embedded JavaScript)**: Motor de plantillas para generar HTML dinámico.
- **JavaScript**: Lenguaje utilizado para manejar la lógica tanto en el frontend como en el backend.
- **PostgreSQL**: Base de datos relacional para almacenar los datos de las películas y sus votos.
- **CSS**: Utilizado para estilizar la aplicación y mejorar la presentación visual de la interfaz.

## Estructura del Proyecto 📂

- **`controllers/`**: Contiene la lógica de negocio para manejar las rutas y operaciones CRUD.
- **`db.js`**: Configuración de la conexión a la base de datos PostgreSQL.
- **`models/`**: Definición de los modelos de datos y esquemas de la base de datos.
- **`views/`**: Archivos de plantillas EJS que generan la interfaz de usuario dinámica.
- **`public/`**: Contiene archivos estáticos como CSS, imágenes y recursos externos.
  - **`public/css/`**: Estilos de la interfaz.
  - **`public/images/`**: Iconos de superhéroes y fondo de la aplicación.

## Instalación y Configuración 🚀

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/YanninaF/CRUD-VOTOS-MARVEL.git

## Instala las dependencias

Navega a la carpeta del proyecto y ejecuta:

    
    npm install


## Configurar la base de datos

- Asegúrese de tener PostgreSQL instalado
- Cree una base de datos para la aplicación
- Configure los detalles de la conexión en el archivo `db.js`

## Iniciar la aplicación

Para iniciar el servidor, ejecuta:

    node app.js

## Acceder a la aplicación

Abre tu navegador y dirígete a `http://localhost:3007` (o el puerto configurado en `app.js`) para empezar a gestionar tus películas de Marvel.

## Uso de la Aplicación 👩‍💻

### Funcionalidades principales

- **Agregar película:**
  - Completa los campos de título y enlace
  - Haz clic en "Agregar Película"

- **Votar:**
  - Haz clic en el botón "Votar" junto a la película deseada
  - Incrementa su contador de votos

- **Actualizar película:**
  - Modifique el título o el enlace de la película
  - Haga clic en "Actualizar"

- **Eliminar película:**
  - Haz clic en "Eliminar" para borrar una película de la lista

## Contribuciones 🤝

Si tienes ideas o mejoras para el proyecto, ¡puedes colaborar!

### Pasos para contribuir:

- Haz un fork del repositorio
- Realiza tus cambios
- Envía un "pull request" en GitHub para que tus modificaciones puedan ser revisadas e integradas al proyecto

## Autor 👤

Desarrollado por YanninaF, apasionada por la programación y el universo Marvel. 😊
