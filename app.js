//==========================================================================
// ESTE ARCHIVO SIRVE PARA CON INICIAR "EXPRESS" Y CONFIGURAR "BODY PARSER"
//==========================================================================

// Requires
const express = require('express');
const bodyParser = require('body-parser');

// Inicializar variable
const app = express();

//Configurar body parser - 
app.use(bodyParser.json()); //extrae todo lo que enviamos, solo archivos json
app.use(bodyParser.urlencoded({ extended: false })); //no acepta objetos anidados


//Cabeceras
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas
require('./server/routes/usuarios')(app);
require('./server/routes/fotografias')(app);

app.get('*', (req, res) => {
    res.status(200).send({ messaje: 'Bienvenido al servidor NodeJS' });
});


//Exportar la constante "app"
module.exports = app;