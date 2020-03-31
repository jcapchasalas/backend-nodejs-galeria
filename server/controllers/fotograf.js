function uploadFotografia(req, res) {
    var id = req.params.id;

    if (req.files) {
        var file_path = req.files.foto.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[3];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];
        if (file_ext == 'jpg') {
            var foto = {};
            foto.imagen = file_name;

            fotografias.findById(id)
                .then(fotografia => {
                    fotografia.update(foto)
                        .then(() => {
                            var newPath = './server/uploads/fotografias/' + file_name;
                            var thumbPath = './server/uploads/fotografias/thumbs';

                            thumb({
                                source: path.resolve(newPath),
                                destination: path.resolve(thumbPath),
                                width: 200,
                                suffix: ''
                            }).then(() => {
                                res.status(200).send({ fotografia });
                            }).catch(err => {
                                res.status(500).send({ message: "Ocurrió un error al crear el thumbnail." });
                            });

                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) {
                                    res.status(500).send({ message: "Ocurrió un error al eliminar el archivo." });
                                }
                            })
                            res.status(500).send({ message: "Ocurrió un error al actualizar la fotografía." });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) {
                            res.status(500).send({ message: "Ocurrió un error al eliminar el archivo." });
                        }
                    })
                    res.status(500).send({ message: "Ocurrió un error al buscar la fotografía." });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) {
                    res.status(500).send({ message: "Ocurrió un error al eliminar el archivo." });
                }
            })
            res.status(500).send({ message: "La extensión no es válida." });
        }
    } else {
        res.status(400).send({ message: "Debe seleccionar una fotografía." });
    }
}