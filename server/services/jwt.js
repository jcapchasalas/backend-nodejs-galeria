var nJwt = require('njwt'); //Libreria

var config = require('../config/config'); //llama a la clave secreta
var secret = config.token_secret; // almacena la clave secreta contenido en config.js

exports.createToken = (usuario) => {
    var params = {
        sub: usuario.id,
        usuario: usuario.usuario,
        id_rol: usuario.id_rol
    }

    var jwt = nJwt.create(params, secret); // Genera el token


    var t = new Date();
    t.setHours(t.getHours() + 10);

    jwt.setExpiration(t); //asignamos la variable t a la variable jwt

    var token = jwt.compact();

    return token;

}