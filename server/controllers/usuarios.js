const usuarios = require('../models').usuarios;
const jwt = require('../services/jwt');

//=================================================================
// CREAR NUEVO USUARIO 
//=================================================================

function create(req, res) {
    usuarios.create(req.body)
        .then(usuario => {
            res.status(200).send({ usuario });
        })
        .catch(err => {
            res.status(500).send({ err });
            console.log(err);
        })
}

//=================================================================
// LOGIN USUARIO 
//=================================================================

function login(req, res) {
    usuarios.findOne({
        where: {
            usuario: req.body.usuario,
            password: req.body.password,
        }
    })

    .then(usuario => {
        if (usuario) {
            if (req.body.token) {
                res.status(200).send({
                    token: jwt.createToken(usuario)
                });
            } else {
                res.status(200).send({
                    usuario: usuario
                });
            }
        } else {
            res.status(401).send({ message: "Acceso no autorizado." });
        }

    })

    .catch(err => {
        res.status(500).send({ message: "Ocurrió un error al buscar el Usuario." });
    })
}

//=================================================================
// LISTAR USUARIO 
//=================================================================

function getAll(req, res) {
    usuarios.all()
        .then(usuarios => {
            res.status(200).send({ usuarios });
        })
        .catch(err => {
            res.status(500).send({ message: "Ocurrió un error al buscar los usuarios." });
        })
}

module.exports = {
    create,
    login,
    getAll
}