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


//=================================================================
// SUBIR FOTOGRAFIA 
//=================================================================

function uploadFotografia(req, res) {
    var id = req.params.id;

    if (req.files) {
        var file_path = req.files.foto.path;
        var file_split = file_path.split('\\');
        console.log(file_split);

        var file_name = file_split[3];
        console.log(file_name);

        var ext_split = file_name.split('\.'); //separa el nombre del archivo y extension
        console.log(ext_split);

        var file_ext = ext_split[1]; //Guardamos la extension

        if (file_ext == 'jpg') {
            var foto = {};
            foto.imagen = file_name;

            fotografias.findByPk(id)
                .then(fotografia => {
                    fotografia.update(foto)
                        .then(() => {
                            res.status(200).send({ fotografia });
                        })
                        .catch(err => {
                            res.status(500).send({ message: "ocurrio un error al actualizar la fotografia" + err });
                        });
                })
                .catch(err => {
                    res.status(500).send({ message: "Ocurrio un error al buscar la fotografia" + err });
                })
        }

    } else {
        res.status(400).send({ message: "Debe seleccionar una fotografía." });
    }
}


module.exports = {
    create,
    update,
    uploadFotografia,
}