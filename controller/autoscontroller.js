const { Autos } = require('../models');

exports.autosDisponibles = async (req, res) => {
    try {
        const autos = await Autos.findAll({ 
            where: { disponibilidad: 1 } 
        });
        res.json(autos);
    } catch (e) {
        res.json({ mensaje: "error"});
    }
};

exports.registrarAuto = async (req,res) => {
    const {marca,modelo,año,disponibilidad} = req.body
    console.log(disponibilidad)
    const disponibilidadInt = disponibilidad ? 1 : 0
    try {
        const A = await Autos.create({marca,modelo,año,disponibilidad: disponibilidadInt})
        
        res.json(A)
       
    } catch (e) {
        console.error('Error al crear el auto:', e); 
        res.status(500).json({ mensaje: "Error al crear el auto", error: e.message });
    }
};
