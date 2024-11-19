// controller/clientecontroller.js

const { Cliente } = require('../models');

exports.registrarCliente = async (req, res) => {
  try {
    const { nombre, correo, numLic,password } = req.body;
    const nuevoCliente = await Cliente.create({ nombre, correo, numLic, password });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error("Error al crear el cliente:", error);
    res.status(500).json({ mensaje: "Error al crear el cliente", error: error.message });
  }
};

exports.verclientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error("Error al obtener los clientes:", error);
    res.status(500).json({ mensaje: "Error al obtener los clientes", error: error.message });
  }
};
