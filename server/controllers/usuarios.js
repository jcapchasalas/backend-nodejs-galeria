const usuarios = require('../models').usuarios;



//=================================================================
// CREAR NUEVO USUARIO 
//=================================================================

//req: todo valor que enviamos al metodo "create", se va recueprar dento de la veriable "req"
//res: para enviar respuesta 
function create(req, res) {
    usuarios.create(req.body)
        .then(usuario => {
            res.status(200).send({ usuario });
        })
        .catch(err => {
            res.status(500).send({ err });
        })
}

module.exports = {
    create,
}