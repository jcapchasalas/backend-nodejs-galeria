const fotografias = require('../models').fotografias; //llama al modelo fotografias

//=================================================================
// CREAR FOTOGRAFIA 
//=================================================================

function create(req, res) {
    var body = req.body;

    fotografias.create(body)
        .then(fotografia => {
            res.status(200).send({ fotografia });
        })
        .catch(err => {
            res.status(500).send({ message: "Ocurrió error al guardar la fotografía" });
        });
}


module.exports = {
    create,
}