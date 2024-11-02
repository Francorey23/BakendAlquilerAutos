const { Autos } = require('../models');

exports.autosDisponibles = async (req, res) => {
    try {
        const autos = await Autos.findAll({ 
            where: { disponibilidad: 1 } 
        });
        res.json(autos);
    } catch (e) {
        res.json({ mensaje: "error" });
    }
};

exports.registrarAuto = async (req, res) => {
    const { marca, modelo, anio, disponibilidad } = req.body; // Cambié 'año' a 'anio' para que coincida
    try {
        // Si 'disponibilidad' está presente en el cuerpo, úsalo, de lo contrario, omítelo
        const autoData = { marca, modelo, anio };
        if (disponibilidad !== undefined) {
            autoData.disponibilidad = disponibilidad;
        }

        const nuevoAuto = await Autos.create(autoData);
        res.json(nuevoAuto);

    } catch (e) {
        console.error('Error al crear el auto:', e); 
        res.status(500).json({ mensaje: "Error al crear el auto", error: e.message });
    }
};
