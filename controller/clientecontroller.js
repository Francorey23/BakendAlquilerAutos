const bcrypt = require('bcrypt');
const { Cliente } = require('../models');

exports.loginCliente = async (req, res) => {
  try {
    const { correo, password } = req.body;

    const cliente = await Cliente.findOne({ where: { correo } });

    if (!cliente) {
      return res.status(401).json({ mensaje: "Usuario no encontrado" });
    }

    // Comparar la contraseña ingresada con la almacenada encriptada
    const passwordMatch = await bcrypt.compare(password, cliente.password);

    if (!passwordMatch) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    // Si la contraseña es correcta, responde con los datos del cliente
    res.json({ success: true, mensaje: "Inicio de sesión exitoso", cliente });

  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
  }
};

    
  
 

  ////////////////////////////
exports.registrarCliente = async (req, res) => {
  try {
    const { nombre, correo, numLic, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de salt rounds
    const nuevoCliente = await Cliente.create({ nombre, correo, numLic, password: hashedPassword });
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
