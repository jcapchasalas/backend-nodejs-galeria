var nJwt = require('njwt');
var config = require('../config/config');
var secret = config.token_secret;

//middlewares
function auth(req, res, next) {
    console.log(req.headers);
    if (!req.headers.authorization) {
        return res.status(403).send({ message: "La petición no tiene la cabecera de autenticación." });
    }

    var token = req.headers.authorization.replace(/['"]+/g, '');
    var payload = nJwt.verify(token, secret, (err, verifiedJwt) => {
        if (err) {
            return res.status(401).send({ message: "Acceso no autorizado." });
        } else {
            next();
        }
    })
}

module.exports = {
    auth
}