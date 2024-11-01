const {Cliente} = require('../models')

exports.registrarCliente = async (req,res) => {
    const {nombre,correo,numLic} = req.body
    try {
        const C = await Cliente.create({nombre,correo,numLic})
        res.json(C)
    } catch (e) {
        res.json({ mensaje: "error"})
    }
}

exports.verclientes = async (req , res) => {
    try {
        const resultado = await Cliente.findAll()
        res.json(resultado)
    } catch (e) {
        res.json({ mensjae: "error"})
    }
}