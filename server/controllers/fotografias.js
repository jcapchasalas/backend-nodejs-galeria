const fotografias = require('../models').fotografias; //llama al modelo fotografias
const fs = require('fs'); //manejador de archivos de node
const thumb = require('node-thumbnail').thumb;
const path = require('path'); //Resuelva la ruta correctamente


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
        //console.log(file_split);

        var file_name = file_split[3];
        //console.log(file_name);

        var ext_split = file_name.split('\.'); //separa el nombre del archivo y extension
        //console.log(ext_split);

        var file_ext = ext_split[1]; //Guardamos la extension

        if (file_ext == 'jpg') {
            var foto = {};
            foto.imagen = file_name;

            fotografias.findByPk(id)
                .then(fotografia => {
                    fotografia.update(foto)
                        .then(() => {
                            var newPath = './server/uploads/fotografias/' + file_name;
                            var thumbPath = './server/uploads/fotografias/thumbs'; //guardar la img pequeña

                            thumb({
                                source: path.resolve(newPath),
                                destination: path.resolve(thumbPath),
                                width: 200,
                                suffix: '' //sifujo
                            }).then(() => {
                                res.status(200).send({ fotografia });
                            }).catch(err => {
                                res.status(500).send({ message: "Ocurrió un error al crear el thumbnail." });
                            });

                            res.status(200).send({ fotografia });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) {
                                    res.status(500).send({ message: 'Ocurrio un error al eliminar el archivo' });
                                }
                            })
                            res.status(500).send({ message: "ocurrio un error al actualizar la fotografia" + err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) {
                            res.status(500).send({ message: 'Ocurrio un error al eliminar el archivo' });
                        }
                    })
                    res.status(500).send({ message: "Ocurrio un error al buscar la fotografia" });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) {
                    res.status(500).send({ message: 'Ocurrio un error al eliminar el archivo' });
                }
            })
            res.status(500).send({ message: "La extension no es valida" });
        }

    } else {
        res.status(400).send({ message: "Debe seleccionar una fotografía." });
    }
}

//=================================================================
// INSERT NEW COMMENT 
//=================================================================


module.exports = {
    create,
    update,
    uploadFotografia,
}