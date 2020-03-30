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

//=================================================================
// ACTUALIZAR FOTOGRAFIA 
//=================================================================

function update(req, res) {
    var id = req.params.id;
    var body = req.body;

    fotografias.findByPk(id)
        .then(fotografia => {
            fotografia.update(body)
                .then(() => {
                    res.status(200).send({ fotografia });
                })
                .catch(err => {
                    res.status(500).send({ message: "Ocurrió un error al actualizar la fotografía." });
                })
        })
        .catch(err => {
            res.status(500).send({ message: "Ocurrió un error al buscar la fotografía." });
        });
}

module.exports = {
    create,
    update,
}