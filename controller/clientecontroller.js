// controller/clientecontroller.js

const { Cliente } = require('../models');

 exports.loginCliente = async (req, res) => {
    try {
      const { correo, password } = req.body;
  
      // Buscar al cliente por correo
      const cliente = await Cliente.findOne({ where: { correo } });
  
      if (!cliente) {
        return res.status(404).json({ mensaje: "Cliente no encontrado" });
      }
  
      // Verificar la contraseña
      //const passwordValido = password === cliente.password; 
      const passwordValido = await bcrypt.compare(password, cliente.password);

      
      if (!passwordValido) {
        return res.status(401).json({ mensaje: "Contraseña incorrecta" });
      }
  
      // Responder con éxito
      res.status(200).json({ mensaje: "Inicio de sesión exitoso", cliente });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      res.status(500).json({ mensaje: "Error al iniciar sesión", error: error.message });
    }
  }; 

  ////////////////////////////
exports.registrarCliente = async (req, res) => {
  try {
    const { nombre, correo, numLic, password } = req.body;
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
