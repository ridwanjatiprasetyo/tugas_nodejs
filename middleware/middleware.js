const joi = require('joi')

exports.validasi_tugas = (req, res, next) => {
    let schema = joi.object().keys({
            judul: joi.string().required().min(1).max(30),
            deskripsi: joi.string().min(0).max(50),
            selesai: joi.boolean().default(false)
    })

    const tugas = schema.validate(req.body)

    if (!tugas.error) {
        next()
       } else {
         res.status(400).json({
         message: 'invalid request!',
         error: tugas.error
        });
       }
}

exports.validasi_find_tugas = (req, res, next) => {
    let idDigit = req.params.id

    if (idDigit.length === 24) {
        next()
    } else {
        res.status(400).json({
        message: 'id must be 24 digits!',
        });
    }
    
}

exports.validasi_update_tugas = (req, res, next) => {
    let schemaUpdate = joi.object().keys({
        judul: joi.string().required().min(1).max(30),
        deskripsi: joi.string().required().min(1).max(50),
        selesai: joi.boolean().default(false)
    })

    const update = schemaUpdate.validate(req.body)

    const idDigit = req.params.id

    if (idDigit.length === 24) {
        if (!update.error) {
            next()
        } else {
            res.status(400).json({
            message: 'invalid request, field cannot be empty!',
            error: update.error
            });
        }
    } else {
        res.status(400).json({
        message: 'id must be 24 digits!',
        });
    }

    
}